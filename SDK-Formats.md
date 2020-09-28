# Formats for making API calls using the SDKs
## .NET SDK (C# specific)
1. Set up the request object:
```
Format:
    <ServiceName>Service.<Method> varName = new <ServiceName>Service.<Method>();

Example:
    AuthenticationSerrvice.Authenticate auth = new AuthenticationService.Authenticate();
```

2. Add any needed parameters to the request object:
```
Format:
    varName.<Parameter> = <value>;

Example:
    auth.LoginName = "cwadmin";
    auth.Password = "Training1";
```

3. Make the request and set a callback function:
```
Format:
    <ServicesObject>.<ServiceGroup>.<ServiceName>(varName, <CallbackFunction>)

Example:
    _services.General.Authentication(auth, authenticationCallback);
```

4. Work with the response as needed:
```
Example:
    private void authenticationCallback(AuthenticationService.AuthenticateResponse response) {
      if (response.Status == 0) {...}
    }
```
