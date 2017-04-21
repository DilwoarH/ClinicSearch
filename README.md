# Clinics Search
```
Microservice using Clinics Data from data.gov.uk.
```

## Experimental Branches
### Caching
```
Branch Name: "caching" - https://github.com/DilwoarH/ClinicSearch/tree/caching
  - Adds caching to the microservice to allow quicker responses and more efficient responses by not relying on 
  3rd party systems for response times.
  - It also means that if there are restrictions in the Data API from data.gov.uk where a specific number of 
  requests can be made per seconds, it does not hit this limit.
```

## References

### Data API
```
https://data.gov.uk/data/api/service/health/clinics?city={city} - where {city} is city name, ie. London.
```

### Libraries Used
```
Express
- Express is a minimal and flexible Node.js web application framework that provides a robust set of features 
for web and mobile applications.

Lodash
- Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
- Lodash’s modular methods are great for:
    - Iterating arrays, objects, & strings
    - Manipulating & testing values
    - Creating composite functions

Request / Request Promise Native
- Request is designed to be the simplest way possible to make http calls. 
It supports HTTPS and follows redirects by default.

Node-Cache
- A simple caching module that has set, get and delete methods and works a little bit like memcached.

```

## Instructions

### Pre-requisites
```
1. NodeJS / NPM - https://nodejs.org/en/download/
2. A modern browser - https://www.google.co.uk/chrome/browser/desktop/
3. GIT (optional)
```

### Initial Set up

``` 
1. git clone https://github.com/DilwoarH/ClinicSearch
2. node install 
```


### Running Test
```
Tests Currently not implemented.
```
### Running Application
```
1. node index.js
2. navigate to http://localhost:3000/clinics/city/{city} - where {city} is city name, ie. London.
```

## Example Responses

### /clinics/city/{City}
```
{
    status: "success",
    results: {
        SO40: 18,
        SO30: 7,
        SO14: 14,
        SO18: 10,
        SO19: 13,
        SO45: 8,
        SO16: 18,
        SO15: 10,
        SO31: 10,
        SO17: 5,
        SO32: 2,
        SO52: 1
    },
    total: 12
}
```

### /healthcheck
```
{
    service: "https://data.gov.uk/data/api/service/health/clinics?city=",
    isHealthy: true,
    time: 130
}
```

