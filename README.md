# Api_endpoint
This a server-side API endpoint that receives a webhook containing a single string of data in JSON format.
It then converts the string into an array of characters, order the array alphabetically, and return the array as a word.
It is a POST endpoint.
It is built with Built with Express.js.

## Requirements
- Node.js
- npm
- Express.js

## Running the app locally
- npm start
The server runs at the port http://localhost:3000

## Testing with Postman
- Open postma
- Method: POST
- URL: http://localhost:3000/webhook
- Body -> raw -> JSON
- Add the data: { "data": "string"}
- Click send to see the sorted results.
