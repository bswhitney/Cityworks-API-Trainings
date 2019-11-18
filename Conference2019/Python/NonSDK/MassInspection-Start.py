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
    return "WHEN COMPLETE, REMOVE THIS LINE"

def make_request(url, params): # Function to make an API call.
    return "WHEN COMPLETE, REMOVE THIS LINE"

def clear_console(): # Function to clear the console.
    os.system('cls' if os.name == 'nt' else 'clear')


# AUTHENTICATION ******************************************************************************************************
def auth_authenticate(uname, pword): # Function to make the Authentication Authenticate API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    # Check response status. If good, return token. If bad, return nothing.
    return "WHEN COMPLETE, REMOVE THIS LINE"

while True: # Loop to authenticate user.
    clear_console()
    # Get user credentials and make the authentication API call.
    # Check the returned value. If it's good, save the token globally.
    break # WHEN COMPLETE, REMOVE THIS LINE


# LOAD ENTITY GROUPS FROM THE DOMAIN **********************************************************************************
def entity_groups(): # Function to make the Entity Groups API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    # Check response status. If good, create and return group module dictionary. If bad, return nothing.
    return "WHEN COMPLETE, REMOVE THIS LINE"

while True: # Loop to select an entity group.
    clear_console()
    # Make entity groups API call. If error occurs, inform user and kill program.
    # Get, validate, and save user entity group selection.
    break # WHEN COMPLETE, REMOVE THIS LINE

            
# LOAD ENTITY TYPES FROM THE DOMAIN ***********************************************************************************
def entity_types(group_module): # Function to make the Entity Types API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    # Check response status. If good, create and return entity type dictionary. If bad, return nothing.
    return "WHEN COMPLETE, REMOVE THIS LINE"

while True: # Loop to select an entity type.
    clear_console()
    # Make entity types API call. If error occurs, inform user and kill program.
    # Get, validate, and save user entity type selection.
    break # WHEN COMPLETE, REMOVE THIS LINE

# LOAD INSPECTION TEMPLATES BY ENTITY TYPE ****************************************************************************
def inspTemplate_search(): # Function to make the Inspection Template Search API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    # Check response status. If good, return list of template IDs. If bad, return nothing.
    return "WHEN COMPLETE, REMOVE THIS LINE"

def inspTemplate_byIds(temp_ids): # Function to make the Inspection Template By IDs API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    # Check response status. If good, create and return inspection template dictionary. If bad, return nothing.
    return "WHEN COMPLETE, REMOVE THIS LINE"

while True: # Loop to select an inspection template.
    clear_console()
    # Make inspection template search and by IDs API calls. If error occurs, inform user and kill program.
    # Get, validate, and save user inspection template selection.
    break # WHEN COMPLETE, REMOVE THIS LINE


# FILE HANDLING *******************************************************************************************************
""" WHEN COMPLETE, REMOVE THIS LINE
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
WHEN COMPLETE, REMOVE THIS LINE """

# CREATE INSPECTION ***************************************************************************************************
def inspection_create(entity_sid): # Function to make the Inspection Create API call.
    # Gather data into dictionary. Convert to to JSON. Make API call.
    # Check response status. If good, return success message. If bad, return failure message.
    return "WHEN COMPLETE, REMOVE THIS LINE"

# Open a pandas dataframe using excel file.
# Loop through OBJECTID column.
    # Make API call.
    # Log the results.
    # Print result of API call.
# Inform user of completion and log location.