<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

* middleware: it is a way (function with next() orn done()) to add extended functionality to the framework. global are for the application level and local are for particular route only. they deal with requests and responses
* sessions: way to persist data across requests (mainly authentication data like usernames ), they have little info for the server to recognize the devise of the user and keep him accessing to other resources
* bcrypt: a way to hash the password and store it in the data base, we compare new passwords against the hashed passwords
* jwt alternative to cookies ,are used to store information about the user and are sent back and forth bewteen client and the server to let the server know about the client if it is allowed to accesses resources or not

2.  What does bcrypt do in order to prevent attacks?
    makes the hashing algorithm producing hashes very slowly via adding time, its called rounds. the attackers will automatically will slow down in generating rainbow tables

3)  What are the three parts of the JSON Web Token?

* header, payload and signature
