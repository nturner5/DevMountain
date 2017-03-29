# Authentication

- you have to keep that user's information

## Local Strategy

- username / passwords
- needs signup
- you have to make sure that user doesn't get compromised
- Client to Server to database to check id (credentials)

## O Auth Strategy

- You use a 3rd Party for authentication
- stores user id
- Client to Server then the Server will send client to Auth 0 (They are going to a whole other domain)
- Auth 0 will then send the ID to the Server
- Then it will check the id sent by Auth 0 in the server's database

## Sessions

- here is my username and password
- session allows you to just logon once
- client gives username and password
- you create 1 session for everyone who logs in and save it to storage
- saves the sessionid and saves it as a cookie and when they get back on the browser it looks for that cookie again
