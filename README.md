# Saving Contact Form Data Using MongoDB and Node.js.

Steps To Be Followed :

In terminal write :

1) "npm init" , to initialize node packages."package.json" file be created where you will see all modules installed under dependencies.

2) "npm i express" : Express provides methods to specify what function is called for a particular HTTP verb ( GET , POST , SET , etc.) and URL pattern ("Route"), and methods to      specify what template ("view") engine is used, where template files are located, and what template to use to render a response
 
3) "npm i nodemon" :  It's specific use is to automatically restart the node server without having to start the node server explicitly by typing the node commands. It greatly        reduces the time and effort required by the developer in running the application.

4) "npm i mongoose" : Mongoose requires a connection to a MongoDB database.In this project it is connected to locally hosted database.

5) "npm i pug" : Pug is a templating engine for Express.

6) "npm i body-parser" : In order to get access to the post data we have to use body-parser . Basically what the body-parser is which allows express to read the body and then        parse that into a Json object that we can understand. It parses the HTTP request body.

Start Mongod Process In Windows Powershell

Write "mongod" To Start

Now You Can either Use MongoDB Compass (GUI) or Start Mongo In Terminal

