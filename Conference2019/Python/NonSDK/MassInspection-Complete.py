# IMPORT STATEMENTS ***************************************************************************************************
import requests, json # Import libraries for core Cityworks API functionality.
import os, pandas, datetime # Import other libraries for added functionality.


# GLOBAL VARIABLES ****************************************************************************************************
base_url = "https://training.cityworks.com/cityworks/services/" # URL of installation's API services.
cw_token = "" # Variable to hold Cityworks token.
group = "" # Variable to hold entity group module.
entity_type, entity_desc = "", "" # Variables to hold entity type and description.
template_id, template_name = "", "" # Variables to hold inspection template ID and name.
excel_path, log_path = "", "" # Variables to hold needed file paths.


# SCRIPT FUNCTIONALITY ************************************************************************************************
def data_to_json(data_dict): # Function to convert Python dictionary to JSON.
    token = cw_token
    json_data = json.dumps(data_dict, separators=(",",":"))
    if len(list(token)) == 0:
        params = {"data":json_data}
    else:    
        params = {"token": token, "data": json_data}
    return params

def make_request(url, params): # Function to make an API call.
    response = requests.get(url, params=params)
    return json.loads(response.text)

def clear_console(): # Function to clear the console.
    os.system('cls' if os.name == 'nt' else 'clear')


# AUTHENTICATION ******************************************************************************************************
def auth_authenticate(uname, pword): # Function to make the Authentication Authenticate API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    data = {"LoginName":uname, "Password":pword}
    parameters = data_to_json(data)
    url = base_url + "general/authentication/authenticate"
    response = make_request(url, parameters)
    # Check response status. If good, return token. If bad, return nothing.
    if response["Status"] == 0:
        return response["Value"]["Token"]
    else:
        return ""

while True: # Loop to authenticate user.
    clear_console()
    # Get user credentials and make the authentication API call.
    print("Enter your username and password to continue.")
    username = input("    Username: ")
    password = input("    Password: ")
    token = auth_authenticate(username, password)
    # Check the returned value. If it's good, save the token globally.
    if token == "":
        input("\nERROR: Invalid credentials or network error. Hit enter to continue...")
        continue
    else:
        cw_token = token
        input("\nYou have been signed in as {}. Hit enter to continue...".format(username))
        break


# LOAD ENTITY GROUPS FROM THE DOMAIN **********************************************************************************
def entity_groups(): # Function to make the Entity Groups API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    data = {}
    parameters = data_to_json(data)
    url = base_url + "ams/entity/groups"
    response = make_request(url, parameters)
    # Check response status. If good, create and return group module dictionary. If bad, return nothing.
    if response["Status"] == 0:
        group_dictionary = {}
        for group in response["Value"]:
            group_dictionary[group["Module"]] = group["ModuleName"]
        return group_dictionary
    else:
        return ""

while True: # Loop to select an entity group.
    clear_console()
    # Make entity groups API call. If error occurs, inform user and kill program.
    groups = entity_groups()
    if groups == "":
        input("There was an error loading entity groups. Hit enter to stop the script...")
        quit()
    # Get, validate, and save user entity group selection.
    print("Select an entity type by its code.")
    for g in groups:
        print("    {}:  {}".format(g, groups[g]))
    select_group = input("Your selection: ").upper()
    if select_group in groups:
        group = select_group
        break
    else:
        continue

            
# LOAD ENTITY TYPES FROM THE DOMAIN ***********************************************************************************
def entity_types(group_module): # Function to make the Entity Types API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    data = {"EntityGroup": group_module}
    parameters = data_to_json(data)
    url = base_url + "ams/entity/types"
    response = make_request(url, parameters)
    # Check response status. If good, create and return entity type dictionary. If bad, return nothing.
    if response["Status"] == 0:
        type_dictionary = {}
        for _type in response["Value"]:
            type_dictionary[_type["Code"]] = _type["Description"]
        return type_dictionary
    else:
        return ""

while True: # Loop to select an entity type.
    clear_console()
    # Make entity types API call. If error occurs, inform user and kill program.
    types = entity_types(group)
    if types == "":
        input("There was an error loading entity types. Hit enter to stop the script...")
        quit()
    # Get, validate, and save user entity type selection.
    print("Select an entity type by its code.")
    for t in types:
        print("    {}:  {}".format(t, types[t]))
    select_type = input("Your selection: ").upper()
    if select_type in types:
        entity_type = select_type
        entity_desc = types[select_type]
        break
    else:
        continue


# LOAD INSPECTION TEMPLATES BY ENTITY TYPE ****************************************************************************
def inspTemplate_search(): # Function to make the Inspection Template Search API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    data = {"EntityType":[entity_type], "IsActive":True}
    parameters = data_to_json(data)
    url = base_url + "ams/inspectiontemplate/search"
    response = make_request(url, parameters)
    # Check response status. If good, return list of template IDs. If bad, return nothing.
    if response["Status"] == 0:
        return response["Value"]
    else:
        return "" 

def inspTemplate_byIds(temp_ids): # Function to make the Inspection Template By IDs API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    data = {"InspTemplateIds": temp_ids}
    parameters = data_to_json(data)
    url = base_url + "ams/inspectiontemplate/byids"
    response = make_request(url, parameters)
    # Check response status. If good, create and return inspection template dictionary. If bad, return nothing.
    if response["Status"] == 0:
        template_dictionary = {}
        for template in response["Value"]:
            template_dictionary[template["InspTemplateId"]] = template["InspTemplateName"]
        return template_dictionary
    else:
        return ""

while True: # Loop to select an inspection template.
    clear_console()
    # Make inspection template search and by IDs API calls. If error occurs, inform user and kill program.
    temp_ids = inspTemplate_search()
    if temp_ids == "":
        input("There was an error loading inspection templates. Hit enter to stop the script...")
        quit()
    templates = inspTemplate_byIds(temp_ids)
    if templates == "":
        input("There was an error loading inspection templates. Hit enter to stop the script...")
        quit()
    # Get, validate, and save user inspection template selection.
    print("Select an entity type by its code.")
    for t in templates:
        print("    {}: {}".format(t, templates[t]))
    try:
        select_temp = int(input("Your Inspection Template Selection: "))
        if select_temp in templates:
            template_id = select_temp
            template_name = templates[select_temp]
            break
    except:
        continue


# FILE HANDLING *******************************************************************************************************
def file_format_path(path): # Function to format a file path.
    new_path = ""
    for i in path:
        if i == "/":
            new_path += "\\"
        else:
            new_path += i
    return new_path

def make_log_file(in_path): # Function to create log file from 
    time_stamp = datetime.datetime.now().strftime("%Y%m%d%H%M")
    index_max = 0
    for i in range(len(in_path)):
        if in_path[i] =="\\":
            index_max = i
    directory = in_path[:index_max + 1]
    new_path = "{}{}_{}_InspCreateLog.txt".format(directory, entity_type, time_stamp)
    global out_path
    out_path = new_path
    log = open(new_path, "w+")
    log.close()
    return new_path

while True: # Loop to get excel file path.
    clear_console()
    path = input("Please enter the path to the excel file of entities: ").lower()
    if os.path.exists(path) == True:
        if path.endswith(".xls"):
            excel_path = path
            log_path = make_log_file(excel_path)
            break
        else:
            input("The file must be an excel file with a .xls extention. Hit enter to continue...")
    else:
        input("This is an invalid file path. Hit enter to continue...")

# CREATE INSPECTION ***************************************************************************************************
def inspection_create(entity_sid): # Function to make the Inspection Create API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    data = {
        "InspTemplateId": template_id,
        "EntityType": entity_type,
        "GetGisData":True,
        "Entity":{"EntityType": entity_type, "EntitySid": entity_sid}
    }
    parameters = data_to_json(data)
    url = base_url + "ams/inspection/create"
    response = make_request(url, parameters)
    # Check response status. If good, return success message. If bad, return failure message.
    if response["Status"] == 0:
        return "SUCCESS — EntitySid: {} — InspectionId: {}".format(entity_sid, response["Value"]["InspectionId"])
    else:
        return "FAILURE — EntitySid: {}".format(entity_sid)

# Open a pandas dataframe using excel file.
excel = pandas.read_excel(excel_path)
# Loop through OBJECTID column.
for sid in excel.get("OBJECTID"):
    # Make API call.
    result = inspection_create(sid)
    # Log the results.
    log = open(out_path, "a+")
    log.write(result + "\n")
    log.close()
    # Print result of API call.
    print(result)
# Inform user of completion and log location.
clear_console()
print("\nMass inspection creation complete. Your log file can be found at the following location:\n    {}".format(out_path))