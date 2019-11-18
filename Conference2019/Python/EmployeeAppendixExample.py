# Import the SDK and the Cityworks messages for AMS.
import cwpy.cwServices, cwpy.cwMessagesAMS

# Set up the services object to interact with the API. Set the URL.
services = cwpy.cwServices.Services()
services.url = "https://training.cityworks.com/cityworks"

# Get username and password from user, make API call, save to variable.
username = input("\nUsername: ")
password = input("Password: ")
auth_response = services.authenticate(username, password)
print()

# If status is bad, inform the user and kill the script.
if auth_response['Status'] != 0:
    input("Error making Authentication API call. Press enter to quit.")
    quit()

# Make the All Employees API call.
employee_all_request = cwpy.cwMessagesAMS.EmployeeService.All()
employee_all_request.IncludeInactive = True
employee_all_response = services.ams.Employee_all(employee_all_request)

# If the response is bad, inform the user.
if employee_all_response['Status'] != 0:
    input("Error making Employee All API call. Press enter to quit.")
    quit()

# If the response is good, show each employee ID, the employee name, and the regular pay.
else:
    for e in employee_all_response['Value']:
        print("({}) {}: ${}".format(e['EmployeeSid'], e['FullName'], e['HourlyRate']))

input("\n\nHit enter to quit.")