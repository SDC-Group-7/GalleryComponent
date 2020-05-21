# FEC Project
## Gallery Component 

Instructions to get the component up and running
> Some usage instructions

```bash
npm install 
npm run reset-db
npm run seed-db
npm run server
```

> Seed MySQL

1. create seed/mysql.user
e.g.
```
echo '[MYSQL USER]' > seed/mysql.user
```

2. create seed/mysql.pass
e.g.
```
echo '[MYSQL PASSWORD]' > seed/mysql.pass
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

## Related Projects

  - https://github.com/LeggoMyLego/ReviewComponent
  - https://github.com/LeggoMyLego/ProductComponent


