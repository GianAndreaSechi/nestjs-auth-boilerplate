# NestJS 
## Authentication and Authorization Boilerplate

This is a simple ready to use boilerplate with JWT Authentication and Authorization so you can develop your application based on this template.

You can simply login and get access-token for your application template (actually not provide specific action authorization).

It uses TypeORM to access the database, @nestjs/jwt to create bearer token and @nestjs/swagger to show routes details.

This is not production ready at the moment.

---
### Next functions
Authorization action by role

*At the moment there isn't UPDATE or DELETE user, it will be added as soon as possible.*

---
### Routes
* The API prefix is: *api/v1*
* baseurl: localhost:3000

you can find the routes on localhost:3000/api via swagger

- GET:
  - <base_url>/api/v1/ping - no auth
  - <base_url>/api/v1/users - auth
  - <base_url>/api/v1/users/id/{id} - auth
  - <base_url>/api/v1/users/username/{username} - auth
  - <base_url>/api/v1/auth/profile - auth
- POST:
  - <base_url>/api/v1/auth/login - no auth
  - <base_url>/api/v1/users/create - auth

*you can import on Postman the pre-setted collection you can find in Postman/API_Auth_Boilerplate.postman_collection.json*

---
## Default User

* Username: Admin
* Password: @dmin!strator
* Role:     Admin

---
## Setup

You need NestJS and mySql installed.

firstable you need to import db\auth_db.sql into your mysql istance.

after that you have to create an .env file with the database configuration based on env_base structure.

Launch:

`
\> npm install
`

`
\> cd api\v1
\> npm run start
`