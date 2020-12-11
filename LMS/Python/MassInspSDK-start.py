"""Python file to generate inspections of a selected template on all assets of a selected type"""
# Import SDK, necessary Python libraries.
import json, os, datetime, sys

# Load data from the JSON file.


# Declare global variables


# Function to clear the console.
def clear_console():
    """Function to clear the console."""
    os.system('cls' if os.name == 'nt' else 'clear')

# Declare the services object.


# Authenticate the credentials found in the JSON file.


# While loop to select an entity type.


# Using the selected entity type, get inspection templates.


# Populate a dictionary with InspTemplateId/InspTemplateName pairs.


# While loop to select an inspection template.


# Search for assets of the selected entity type.


# Populate a list with the OBJECTID of each asset.


# Function to create an inspection using an asset's OBJECTID.


# Generate a log file.


# Function to add information to a log file.


# Write a header in the log file.


# Initialize a timer, inspection creation count.


# Loop through assets, create inspections, log results, and print progress.


# Log info about performance.


# Inform user of the log location.

