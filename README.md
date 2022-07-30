# API_for_Genesis
That API was written using `Node.js` and other packages. You can 

>There is no docker file. You can read how to run this api below.

INSTALLATION
------------

You should install next addition packages to run this api:
* Node.js
* install in console using npm: 
  * npm install chalk fs fetch nodemailer googleapis express nodemon body-parser

REQUIREMENTS
------------

For using this API you should have any app to send requests. I recommend to use POSTMAN. Further I will explain how to make requests in POSTMAN.

QUICK START
-----------

Open cmd and go to the directory `javascript`. Type on command line following command:
* npm run start

After that you will see: Server is running....

Go to the POSTMAN and copy next line to make request:
* GET request /rate
  * [localhost](http://localhost:3000/rate)
* POST request /subscribe with one param: email yiu want to add
  * [localhost](http://localhost:3000/subscribe?email=`email_you_want_to_add`)
* POST request /sendEmails 
  * [localhost](http://localhost:3000/sendEmails)


Thank ou for using my API. You can contact with me to send proposals or remarks.
I will appreciate it.

Contacts
-----------
Gmail: ishchenk0n1kolay122@gmail.com

