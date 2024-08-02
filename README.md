# Note-Taking API with Tags and Query Features

## Overview

This is a RESTful API developed using Node.js and Express.js for a note-taking application. The API allows users to create, read, update, and delete notes, manage tags for each note, and perform complex queries based on these tags.

## Features

- Basic Note Operations: Create, read, update, and delete notes.
- Tag Management: Add, update, and remove tags from notes.
- Logical Querying: Retrieve notes based on complex tag-based queries.

## Requirements

- Node.js 
- npm 

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sudhakar-swain-au27/notetakingapis.git
   cd notetakingapis
2. Testing API Endpoints
# #You can use tools like Postman or cURL to test the API endpoints. Below are examples for each endpoint:

# Create a New Note
- URL: /notes
- Method: POST
- Headers: Content-Type: application/json
- Body:
json
{
  "title": "First Note",
  "content": "This is my first note",
  "tags": ["work", "personal"]
}

# Postman:
- Open Postman.
- Select POST method.
- Enter the URL: http://localhost:3000/notes.
- Go to the Body tab, select raw, and choose JSON from the dropdown.
- Enter the JSON body and click Send.
cURL:

```bash

curl -X POST http://localhost:3000/notes -H "Content-Type: application/json" -d '{"title": "First Note", "content": "This is my first note", "tags": ["work", "personal"]}'
Retrieve All Notes
URL: /notes

Method: GET

Postman:

Open Postman.
Select GET method.
Enter the URL: http://localhost:3000/notes.
Click Send.
cURL:

``` bash
Copy code
curl -X GET http://localhost:3000/notes
Retrieve a Single Note by ID
URL: /notes/:id

Method: GET

Postman:

Open Postman.
Select GET method.
Enter the URL: http://localhost:3000/notes/{id} (replace {id} with the actual note ID).
Click Send.
cURL:

``` bash

curl -X GET http://localhost:3000/notes/{id}
Update a Note by ID
URL: /notes/:id

Method: PUT

Headers: Content-Type: application/json

Body:

json
{
  "title": "Updated Note",
  "content": "This is the updated content",
  "tags": ["work"]
}
Postman:

Open Postman.
Select PUT method.
Enter the URL: http://localhost:3000/notes/{id} (replace {id} with the actual note ID).
Go to the Body tab, select raw, and choose JSON from the dropdown.
Enter the JSON body and click Send.
cURL:

``` bash
Copy code
curl -X PUT http://localhost:3000/notes/{id} -H "Content-Type: application/json" -d '{"title": "Updated Note", "content": "This is the updated content", "tags": ["work"]}'
Delete a Note by ID
URL: /notes/:id

Method: DELETE

Postman:

Open Postman.
Select DELETE method.
Enter the URL: http://localhost:3000/notes/{id} (replace {id} with the actual note ID).
Click Send.
cURL:

``` bash

curl -X DELETE http://localhost:3000/notes/{id}
3. Tag Management
Add Tags to a Note
URL: /notes/:id/tags

Method: PUT

Headers: Content-Type: application/json

Body:

json
{
  "tags": ["urgent", "important"]
}
Postman:

Open Postman.
Select PUT method.
Enter the URL: http://localhost:3000/notes/{id}/tags (replace {id} with the actual note ID).
Go to the Body tab, select raw, and choose JSON from the dropdown.
Enter the JSON body and click Send.
cURL:

``` bash
Copy code
curl -X PUT http://localhost:3000/notes/{id}/tags -H "Content-Type: application/json" -d '{"tags": ["urgent", "important"]}'
Remove Tags from a Note
URL: /notes/:id/tags

Method: DELETE

Headers: Content-Type: application/json

Body:

json
{
  "tags": ["personal"]
}
Postman:

Open Postman.
Select DELETE method.
Enter the URL: http://localhost:3000/notes/{id}/tags (replace {id} with the actual note ID).
Go to the Body tab, select raw, and choose JSON from the dropdown.
Enter the JSON body and click Send.
cURL:

 ``` bash
Copy code
curl -X DELETE http://localhost:3000/notes/{id}/tags -H "Content-Type: application/json" -d '{"tags": ["personal"]}'
4. Querying
Retrieve Notes Based on a Logical Tag Query
URL: /notes/query
Method: GET
Query Parameters:
tags (string) - Comma-separated list of tags with optional logical operators (AND, OR, NOT)
Example URL:

``` bash

/notes/query?tags=work,NOT personal
Postman:

Open Postman.
Select GET method.
Enter the URL: http://localhost:3000/notes/query?tags=work,NOT personal.
Click Send.
cURL:

``` bash

curl -X GET "http://localhost:3000/notes/query?tags=work,NOT personal"
Data Structure
Each note should have the following structure:

json

{
  "id": "unique-note-id",
  "title": "Note Title",
  "content": "Note Content",
  "tags": ["tag1", "tag2"]
}
