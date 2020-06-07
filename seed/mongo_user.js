conn = new Mongo();
db = conn.getDB("lego-gallery");

db.createUser(
  {
    user: "legoUser",
    pwd: passwordPrompt(),  // or cleartext password
    roles: [
       { role: "read", db: "lego-gallery" }
    ]
  }
)

