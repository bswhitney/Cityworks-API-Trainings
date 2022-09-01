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
log_path = config_file['logFolder']

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

# Using the selected entity type, get inspection templates.
templates_request = cwpy.cwMessagesAMS.InspectionTemplateService.Templates()
templates_request.EntityTypes = [entity_type]
templates_response = services.ams.InspectionTemplate_templates(templates_request)
if templates_response['Status'] != 0:
    input('Failed to make InspectionTemplate/Templates API call. Hit enter to quit...')
    sys.exit()

# Populate a dictionary with InspTemplateId/InspTemplateName pairs.
templates = {}
for temp in templates_response['Value']:
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

# Function to create an inspection using an asset's OBJECTID.
def inspection_create(asset_id):
    """Function to create an inspection using an asset's OBJECTID."""
    request = cwpy.cwMessagesAMS.InspectionService.Create()
    request.InspTemplateId = insp_template_id
    request.EntityType = entity_type
    request.GetGisData = True
    request.Entity = {'EntityType': entity_type, 'EntitySid': asset_id}
    response = services.ams.Inspection_create(request)
    r_value = f'FAILURE — EntitySid: {asset_id}'
    if response['Status'] == 0:
        insp_id = response['Value']['InspectionId']
        r_value = f'SUCCESS — EntitySid: {asset_id} — InspectionId: {insp_id}'
    return r_value

# Generate a log file.
now = datetime.datetime.now()
now_string = now.strftime('%d%b%Y_%H%M%S')
log_path += f'InspLog_{entity_type}_{now_string}.txt'
with open(log_path, 'w+') as log_file:
    pass

# Function to add information to a log file.
def log_info(info):
    """Function to add information to the log file."""
    with open(log_path, 'a+') as log_file:
        log_file.write(info + '\n')

# Write a header in the log file.
log_info('{}'.format(now))
log_info(f'EntityType: {entity_type}')
log_info(f'InspTemplateId: {insp_template_id}\n')

# Initialize a timer, inspection creation count.
start_time = datetime.datetime.now()
insp_count = 0

# Loop through assets, create inspections, log results, and print progress.
for asset in records:
    result = inspection_create(asset)
    log_info(result)
    insp_count += 1
    clear_console()
    print(f'{insp_count}/{len(records)}\n{round(100 * insp_count / len(records), 2)}%')

# Log info about performance.
runtime = datetime.datetime.now() - start_time
log_info(f'\nRuntime: {runtime}')
log_info(f'Avg. Time per Creation: {round(runtime.seconds / len(records), 2)}s')

# Inform user of the log location.
clear_console()
print('Mass inspection creation complete. Your log file can be found at the following location:')
input(f'\t{log_path}\nHit enter to continue...')
