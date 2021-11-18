# YogaRegistration_form-

## WHAT IS IT?

>I have built this application with reactjs  for the frontend, and Restapi server for the backend.
>I have used postgresql database to store the information of admissions of yoga class

> This application is architectured in a backend folder named server and the frontend folder named client 

## HOW TO INSTALL?
Download from github or git clone
```
 $ git clone https://github.com/anikash322/YogaRegistration_form-.git

```

Install backend dependencies with npm:

```
$ cd server 
$ npm install
```

Install frontend dependencies with npm:

```
$ cd client
$ npm install
```

## HOW TO RUN IT?

 the react application needs to be started simultaneously  by default on port :3000 with the command:

##### client(frontend)
```
$ cd client
$ npm start
```
> Before running server u should have postgresql download and installfrom this link https://www.postgresql.org/download/
> In dir- server/databasepg.js
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "root",  // set your postgresql password i have set here root 
    database: "postgres"
})

##### In other terminal window
##### server(backend: )
```
$ cd server
$ npm start
```


