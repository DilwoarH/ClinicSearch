# Clinics Search
```
Microservice using Clinics Data from data.gov.uk.
```
## References

### Data API
```
https://data.gov.uk/data/api/service/health/clinics?city={city} - where {city} is city name, ie. London.
```

### Libraries Used
```
Express
- Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Lodash
- Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
Lodash’s modular methods are great for:
    - Iterating arrays, objects, & strings
    - Manipulating & testing values
    - Creating composite functions

Request / Request Promise Native
- Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

Node-Cache
- A simple caching module that has set, get and delete methods and works a little bit like memcached.

```

## Experiments
```
Caching has been implemented on 
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
