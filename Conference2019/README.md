# 2019 Cityworks User Content API Training Samples
The files in this directory were created for use with API training courses at the 2019 Cityworks User Conference in Salt Lake City, Utah.

## Project Explanations
The **JavaScript** folder contains the beginning and ending points for a small web application to be turned into a Cityworks plugin that uses the JavaScript SDK. This application simply creates unattached work orders, giving the user the ability to add information to the Location and Text1 fields in the work order table. 

The **CSharp** folder contains the beginning and ending points for a small WinForms application built in Visual Studio using C# and the Cityworks SDK for C#. The application is a simple end-user interface to review storeroom stocks, receive stocks into a main storeroom, and transfer stocks from the main storeroom to satellite storerooms. Note that In order for this application to work, Storeroom must be enabled in Designer Preferences.

The **Python** folder contains the beginning and end points for a Python script that automatically generates custom inspections on assets of a single type, taken from an XLS file. Three XLS files are included, one each for sewer gravity mains, sewer manholes, and water pressurized mains. This script uses the API, but does not use the SDK. To explore the SDK, a script to display employees and their hourly rate is provided.

## Version
These samples are up to date with Cityworks 15.5.1.

## Disclaimer
Azteca Systems, its products, and its employees are not responsible for your implementation of this code. These projects are simply to illustrate basic API functionality then to provide a ready-built program for your production environment.
