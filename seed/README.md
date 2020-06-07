To enable Mongo authentication
------------------------------

https://docs.mongodb.com/manual/tutorial/enable-authentication/

1. Create admin user

$ mongo localhost:27017 mongo_admin.js

2. Stop Mongo

$ brew services stop mongodb-community@4.2

on ec2
$ sudo systemctl stop mongod

3. Edit Mongo config file

$ cat /usr/local/etc/mongod.conf

...
security:
  authorization: enabled
...

4. Start Mongo

$ brew services start mongodb-community@4.2

on ec2
$ sudo systemctl start mongod

5. Create a user

$ mongo localhost:27017 mongo_user.js

6. Login to mongo

mongo -u "legoUser" --authenticationDatabase "lego-gallery" -p

Setup Mongo on EC2
------------------
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/

Setup shard replica set
-----------------------
https://docs.mongodb.com/manual/tutorial/deploy-shard-cluster/
https://www.bmc.com/blogs/how-to-setup-mongodb-cluster/

1. Add in /etc/mongod.conf

```
net:
  port: 27017
  bindIp: 172.31.44.255

replication:
  replSetName: shard_repl

sharding:
  clusterRole: shardsvr
```

2. Start mongo

sudo systemctl start mongod

3. Connect to mongo shell in ONE shard node

mongo --host 172.31.44.255

4. Run

```
rs.initiate(
  {
    _id : "shard_repl",
    members: [
      { _id : 0, host : "172.31.44.255:27017" },
      { _id : 1, host : "172.31.43.227:27017" },
      { _id : 2, host : "172.31.47.69:27017" }
    ]
  }
)
```

Setup mongos + config server
----------------------------
1. Add in /etc/mongod.conf

```
net:
  port: 27017
  bindIp: 172.31.39.157

replication:
  replSetName: config_repl

sharding:
  clusterRole: configsvr
```

2. Start mongo

sudo systemctl start mongod

3. Connet to mongo shell

mongo --host 172.31.39.157 --port 27017

4. Run

rs.initiate()

5. Create mongos config file

sudo vim /etc/mongoRouter.conf

```
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongoRouter.log

net:
  port: 27018
  bindIp: 172.31.39.157

sharding:
  configDB: config_repl/172.31.39.157:27017
```

6. Start mongos

sudo mongos --config /etc/mongoRouter.conf&

7. Connect to mongos with mongo shell

mongo --host 172.31.39.157 --port 27018

8. Add shards cluster

```
sh.addShard( "shard_repl/172.31.44.255:27017,172.31.43.227:27017,172.31.47.69:27017" )
sh.addShard( "shard1_repl/172.31.18.125:27017" )
sh.addShard( "shard2_repl/172.31.24.47:27017" )
```

9. Enable shard on a database

```
sh.enableSharding("lego-gallery")
```

10. Shard a collection

```
sh.shardCollection("lego-gallery.products", { product_id : "hashed" } )
```

11. see shard distribution

```
db.products.getShardDistribution()
```










