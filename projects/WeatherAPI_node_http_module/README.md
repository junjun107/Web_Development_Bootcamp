### Fetching Data from OpenWeatherApp.com

## Goal:

Search a city's weather by name and dispaly the result on webpage.

## Steps:

- Register with OpenWeatherApp to recive a ApiKey.
- with a http.get( ) request.
- Data received is in JSON. Parse that into normal JavaScript object.
- Filter the data through to get only the pieces we want
- Dispaly information

## Take Away

There can only be one res.send() method in an app. The work around is use res.write()
