To enable Mongo authentication
------------------------------

https://docs.mongodb.com/manual/tutorial/enable-authentication/

1. Create admin user

$ mongo localhost:27017 mongo_admin.js

2. Stop Mongo

$ brew services stop mongodb-community@4.2

3. Edit Mongo config file

$ cat /usr/local/etc/mongod.conf

...
security:
  authorization: enabled
...

4. Start Mongo

$ brew services start mongodb-community@4.2

5. Create a user

$ mongo localhost:27017 mongo_user.js

6. Login to mongo

mongo -u "legoUser" --authenticationDatabase "lego-gallery" -p

