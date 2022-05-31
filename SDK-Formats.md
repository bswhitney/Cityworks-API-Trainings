# Formats for making API calls using the SDKs
## .NET SDK (C# specific)
**1. Set up the request object:**
```
Format:
    <ServiceName>Service.<Method> varName = new <ServiceName>Service.<Method>();

Example:
    AuthenticationSerrvice.Authenticate auth = new AuthenticationService.Authenticate();
```

**2. Add any needed parameters to the request object:**
```
Format:
    varName.<Parameter> = <value>;

Example:
    auth.LoginName = "cwadmin";
    auth.Password = "Training1";
```

**3. Make the request and set a callback function:**
```
Format:
    <ServicesObject>.<ServiceGroup>.<ServiceName>(varName, <CallbackFunction>)

Example:
    _services.General.Authentication(auth, authenticationCallback);
```

**4. Work with the response as needed:**
```
Example:
    private void authenticationCallback(AuthenticationService.AuthenticateResponse response) {
      if (response.Status == 0) {...}
    }
```

## JavaScript SDK (AMD Module Loading Format)
**1. Gather all needed parameters into a data object.**
```
Format:
    let data = { <Parameter>: <value>, <Parameter>: <value>, ... };
    
Example:
    let data = { WOTemplateId: 47, EntityType: "CANOPIES", InspectionId: 402 };
```
**2. Make the API call using the appropriate global variable (set up using the define function). Assign a callback ufnction that takes the server response.**
```
Format:
    <globalServiceVariable>.<MethodName>(data).then(<callbackFunctionName>);
    
Example:
    workOrderService.CreateFromInspection(data).then(createFromInspectionCallback);
```
**3. Work with the server's response as needed.**
```
Example:
    function createFromInspectionCallback(response) {
        if (response.Status === 0) { ... }
    }
```

## Python SDK
**1. Initialize the request object.**
``` 
Format:
    <RequestVariable> = cwpy.cwMessages<ServiceGroup>.<Service>Service.<Method>()
Example:
    inspection_search = cwpy.cwMessagesAMS.InspectionService.Search()
```
**2. Add any needed parameters to the request object.**
```
Format:
    <RequestVariable>.<Parameter> = <ParameterValue>
Example:
    inspection_search.Status = ['open']
```
**3. Use the services object to make the API call and add the request object as an argument.**
```
Format:
    <ResponseVariable> = <ServicesVariable>.<ServiceGroup>.<Service>_<method>(<RequestVariable>)
Example:
    inspection_search_response = services.ams.Inspection_search(inspection_search)
```
**4. Work with the response as needed.**
```
Example:
    if inspection_search_response["Status"] == 0:
        ...
```