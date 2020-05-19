Seed MySQL
----------
1. create seed/mysql.user

```
echo 'student' > seed/mysql.user
```

2. create seed/mysql.pass
```
echo 'student' > seed/mysql.pass
```

3. create db/seeder/mysql.config.js and put user/pass info

4. run 
```
npm install
npm run reset-db
npm run seed-db
```

5. to start server
```
npm run server
```
