"""Python file to generate inspections of a selected template on all assets of a selected type"""
# Import SDK, necessary Python libraries.
import json, os, datetime, sys
import cwpy.cwServices, cwpy.cwMessagesAMS

# Load data from the JSON file.
json_path = 'C:/Users/CWTraining/Documents/CWPythonTraining/config.json'
with open(json_path) as json_file:
    config_file = json.load(json_file)

# Declare global variables
entity_type = ''
insp_template_id = ''
username = config_file['username']
password = config_file['password']
cw_site = config_file['site']
entities = config_file['entities']
report_path = config_file['logFolder']

# Function to clear the console.
def clear_console():
    """Function to clear the console."""
    os.system('cls' if os.name == 'nt' else 'clear')

# Declare the services object.
services = cwpy.cwServices.Services()
services.url = cw_site

# Authenticate the credentials found in the JSON file.
auth_response = services.authenticate(username, password)
clear_console()
if auth_response['Status'] != 0:
    input('Authentication failure. Check credentials in config.json. Hit enter to quit...')
    sys.exit()
else:
    input(f'You have been signed in as {username}. Hit enter to continue...')

# While loop to select an entity type.
while True:
    clear_console()
    print('Select an entity type by its number.')
    for index, value in enumerate(entities):
        print(f'\t{index}:  {value["desc"]}')
    select_type = input('Your selection: ')
    if select_type in [str(x) for x in range(len(entities))]:
        entity_type = entities[int(select_type)]['code']
        break

# Using the selected entity type, search for inspection template IDs.
templates_request = cwpy.cwMessagesAMS.InspectionTemplateService.Templates()
templates_request.EntityTypes = [entity_type]
templates_response = services.ams.InspectionTemplate_templates(templates_request)
if templates_response['Status'] != 0:
    input('Failed to make InspectionTemplate/Templates API call. Hit enter to quit...')
    sys.exit()

# Populate a dictionary with InspTemplateId/InspTemplateName pairs.
templates = {}
for temp in temp_byids_response['Value']:
    templates[temp['InspTemplateId']] = temp['InspTemplateName']

# While loop to select an inspection template.
while True:
    clear_console()
    print('Select an entity type by its code.')
    for t in templates:
        print(f'\t{t}: {templates[t]}')
    try:
        select_temp = int(input('Your Inspection Template Selection: '))
        if select_temp in templates:
            insp_template_id = select_temp
            break
    except ValueError:
        continue

# Search for assets of the selected entity type.
entity_search_request = cwpy.cwMessagesAMS.EntityService.Search()
entity_search_request.EntityType = entity_type
entity_search_response = services.ams.Entity_search(entity_search_request)
if entity_search_response['Status'] != 0:
    input('Failed to search for assets. Hit enter to quit.')
    sys.exit()

# Populate a list with the OBJECTID of each asset.
records = []
for item in entity_search_response['Value']['Records']:
    records.append(item['attributes']['OBJECTID'])
print(len(records))

# Function to create an inspection using an asset's OBJECTID.
def inspection_create(asset_id):
    """Function to create an inspection using an asset's OBJECTID."""
    request = cwpy.cwMessagesAMS.InspectionService.Create()
    request.InspTemplateId = insp_template_id
    request.EntityType = entity_type
    request.GetGisData = True
    request.Entity = {'EntityType': entity_type, 'EntitySid': asset_id}
    response = services.ams.Inspection_create(request)
    r_value = ('danger', asset_id, "-")
    if response['Status'] == 0:
        insp_id = response['Value']['InspectionId']
        r_value = ('success', asset_id, insp_id)
    return r_value

# Generate a report file.
now = datetime.datetime.now()
now_string = now.strftime('%d%b%Y_%H%M%S')
report_path += f'InspReport_{entity_type}_{now}.html'
with open(report_path, 'w+') as report_file:
    pass

# Function to add information to a report file.
def write_info(info):
    """Function to add information to the report file."""
    with open(report_path, "a+") as report_file:
        report_file.write(info)

# HTML used to generate the report file.
html_1 = '<!DOCTYPE html><html><head><style>.center { text-align: center; } body { padding-left: 25%; padding-right: 25%; } table { margin: auto; } th, td { padding-left: 15px; padding-right: 15px; }</style><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></head><body><h1 class="center">'
html_2 = '</h1><hr class="border border-primary border-2 opacity-50"><h2 class="center">Overall Results</h2><table><tbody>'
html_3 = '</tbody></table><hr class="border border-primary border-2 opacity-50"><h2 class="center">Individual Results</h2><table class="table"><thead><th>Attempt</th><th>EntityUid</th><th>Outcome</th><th>InspectionId</th></thead><tbody>'
html_4 = '</tbody></table><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script></body></html>'

# Function to write a session parameter string.
def write_session_param(type, value):
    return f"<tr><td><b>{type}:</b></td><td>{value}</td></tr>"

# Function to write the result of an inspection creation attempt.
def write_inspection_result(index, result_tuple):
    status = 'FAILURE' if result_tuple[0] == 'danger' else "SUCCESS"
    return f'<tr class="table-{result_tuple[0]}"><td>{index}</td><td>{result_tuple[1]}</td><td>{status}</td><td>{result_tuple[2]}</td></tr>'

# Initialize a list to hold results, a timer, and an inspection creation count.
start_time = datetime.datetime.now()
insp_count = 0
success_count = 0
results = []

# Loop through assets, create inspections, and print progress.
for asset in records:
    result = inspection_create(asset)
    insp_count += 1
    if result[0] == 'success':
        success_count += 1
    results.append(write_inspection_result(insp_count, result))
    clear_console()
    print(f'{insp_count}/{len(records)}\n{round(100 * insp_count / len(records), 2)}%')

# Gather data for the report file.
title = f"Inspection Creation Report: {entity_type} ({now.strftime('%Y-%b-%d')})"
runtime = datetime.datetime.now() - start_time
job_info = [
    write_session_param("Entity Type", entity_type),
    write_session_param("Inspection Template Id", insp_template_id),
    write_session_param("Total Attempts", insp_count),
    write_session_param("Success Rate", f"{round(100 * success_count / insp_count)}%"),
    write_session_param("Runtime", runtime),
    write_session_param("Time/Inspection", runtime / insp_count)
]

# Write the report.
write_info(html_1 + title + html_2)
for line in job_info:
    write_info(line)
write_info(html_3)
for result in results:
    write_info(result)
write_info(html_4)

# Inform user of the report location.
clear_console()
print('Mass inspection creation complete. Your report file can be found at the following location:')
input(f'\t{report_path}\nHit enter to continue...')
