"""Python file to generate inspections of a selected template on all assets of a selected type"""
# Import necessary Python libraries
import json, os, datetime, sys, requests

# Load data from the json file.
json_path = 'C:/Users/CWTraining/Documents/CwPythonTraining/config.json'
with open(json_path) as json_file:
    config_file = json.load(json_file)

# Declare global variables
cw_token = ''
entity_type = ''
insp_template_id = ''
username = config_file['username']
password = config_file['password']
base_url = config_file['site'] + '/services/'
entities = config_file['entities']
log_path = config_file['logFolder']

# Function to transform a Python dictionary to JSON.
def data_to_json(data_dict):
    """Function to transform a Python dictionary to JSON."""
    token = cw_token
    json_data = json.dumps(data_dict, separators=(',', ':'))
    if len(list(token)) == 0:
        params = {'data':json_data}
    else:
        params = {'token': token, 'data': json_data}
    return params

# Function to make an HTTP request, return a Python dictionary.
def make_request(url, params):
    """Function to make an HTTP request, return a Python dictionary."""
    response = requests.get(url, params=params)
    return json.loads(response.text)

# Function to clear the console.
def clear_console():
    """Function to clear the console."""
    os.system('cls' if os.name == 'nt' else 'clear')

# Function to authenticate user credentials.
def auth_authenticate():
    """Function to authenticate user credentials."""
    data = {'LoginName': username, 'Password': password}
    parameters = data_to_json(data)
    url = base_url + 'general/authentication/authenticate'
    response = make_request(url, parameters)
    r_value = ''
    if response['Status'] == 0:
        r_value = response['Value']['Token']
    return r_value

# Call the auth_authenticate function. Quit if failed.
cw_token = auth_authenticate()
if cw_token == '':
    input('Failed to authenticate user. Check credentials. Hit enter to quit...')
    sys.exit()
else:
    input(f'You have been signed in as {username}. Hit enter to continue...')

# While loop to select an entity type.
while True:
    clear_console()
    print('Select an entity type by its number.')
    for index, value in enumerate(entities):
        print(f'\t{index}: {value["desc"]}')
    select_type = input('Your selection: ')
    if select_type in [str(x) for x in range(len(entities))]:
        entity_type = entities[int(select_type)]['code']
        break

# Function to search for inspection templates using the selected entity type.
def insp_template_search():
    """Function to search for inspection templates using the selected entity type."""
    data = {'EntityType':[entity_type], 'IsActive':True}
    parameters = data_to_json(data)
    url = base_url + 'ams/inspectiontemplate/search'
    response = make_request(url, parameters)
    r_value = ''
    if response['Status'] == 0:
        r_value = response['Value']
    return r_value

# Call the insp_template_search function. Quit if failed.
temp_ids = insp_template_search()
if temp_ids == '':
    print('There was an error searching inspection templates.')
    input('Hit enter to stop the script...')
    sys.exit()

# Function to get inspection template details using inspection template IDs.
def insp_template_byids(template_ids_list):
    """Function to get inspection template details using inspection template IDs."""
    data = {'InspTemplateIds': template_ids_list}
    parameters = data_to_json(data)
    url = base_url + 'ams/inspectiontemplate/byids'
    response = make_request(url, parameters)
    r_value = ''
    if response['Status'] == 0:
        r_value = {}
        for template in response['Value']:
            r_value[template['InspTemplateId']] = template['InspTemplateName']
    return r_value

# Call the insp_template_byids function. Quit if failed.
templates = insp_template_byids(temp_ids)
if templates == '':
    print('There was an error loading inspection templates.')
    input('Hit enter to stop the script...')
    sys.exit()

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
    except TypeError:
        continue

# Function to search for assets of the selected entity type.
def entity_search():
    """Function to search for assets of the selected entity type."""
    data = {'EntityType': entity_type}
    parameters = data_to_json(data)
    url = base_url + 'ams/entity/search'
    response = make_request(url, parameters)
    r_value = ''
    if response['Status'] == 0:
        r_value = response['Value']['Records']
    return r_value

# Call the entity_search function. Quit if failed.
records = entity_search()
if records == '':
    print('There was an error loading assets from the GIS.')
    input('Hit enter to stop the script...')
    sys.exit()

# Initialize a start time.
now = datetime.datetime.now()
now_short = now.strftime('%d%b%Y_%H%M%S')
now_long = now.strftime('%d %b %Y @ %H:%M:%S')

# Function to create an inspection using an asset's OBJECTID.
def inspection_create(entity_sid):
    """Function to create an inspection using an asset's OBJECTID."""
    data = {
        'InspTemplateId': insp_template_id,
        'EntityType': entity_type,
        'GetGisData': True,
        'Entity':{'EntityType': entity_type, 'EntitySid': entity_sid}
    }
    parameters = data_to_json(data)
    url = base_url + 'ams/inspection/create'
    response = make_request(url, parameters)
    r_value = f'FAILURE — EntitySid: {entity_sid}'
    if response['Status'] == 0:
        insp_id = response['Value']['InspectionId']
        r_value = f'SUCCESS — EntitySid: {entity_sid} — InspectionId: {insp_id}'
    return r_value

# Generate a log file 
log_path += f'InspLog_{entity_type}_{now}.txt'
open(log_path, 'w+').close()

# Function to add information to the log file.
def log_info(info):
    """Function to add information to the log file."""
    log = open(log_path, 'a+')
    log.write(info + '\n')
    log.close()

# Write a header.
log_info(now_long + '\n')
log_info('EntityType:     ' + entity_type + '\n')
log_info('InspTemplateId: ' + str(insp_template_id) + '\n\n')

# Start a counter to keep track of completed inspections. Set start time.
insp_count = 0
start_time = datetime.datetime.now()

# Loop through assets, create inspections, log results, and print progress.
for asset in records:
    result = inspection_create(asset['attributes']['OBJECTID'])
    log_info(result)
    insp_count += 1
    clear_console()
    perc_complete = round(100 * insp_count / len(records), 2)
    print(f'{insp_count}/{len(records)}\n{perc_complete}%')
log_info(f'\nRuntime:\t{datetime.datetime.now() - start_time}')

# Inform the user of the log location.
clear_console()
print('Mass inspection creation complete. Your log')
print('file can be found at the following location:')
input(f'\t{log_path}\nHit enter to continue...')
