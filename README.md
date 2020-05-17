# Lego Website (Proxy Server and Docker Practice) #
## Procedures ##
1. GalleryComponent-master
    - Go to "GalleryComponent-master" file and run "npm install" for the dependencies
    - Seed the database
        1. Make sure you add mysql config in "db" folder
        2. Seed the "schema.sql" file using command "mysql -u root < schema.sql" in Ubuntu.
        3. Seed the database by running command "npm run seed-db"
    - Run the script using commands "npm run server" - this will start the app.
2. ProductComponent-master
    - Go to "ProductComponent-master" file and run "npm install" for the dependencies
    - Seed the database
        1. Make sure there is a "config.js" file in "db" folder for MySQL
        2. Seed the "schema.sql" file using command "mysql -u root -p < schema.sql" in Ubuntu.
        3. Seed the database by running command "npm run seed-db"
    - Run the script using commands "npm run react-dev" and "npm run start-server"
3. ReviewComponent-master
    - Go to "ReviewComponent-master" file and run "npm install" for the dependencies
    - Seed the database
        1. Make sure there is a "config.js" file in "db" folder for MySQL
        2. Seed the "lego_schema.sql" file using command "mysql -u root -p < db/lego_schema.sql" in Ubuntu.
        3. Seed the database by running command "npm run seed-db"
    - Run the script using commands "npm run react-dev" and "npm run start-server"


## Related Projects

  - https://github.com/LeggoMyLego/ReviewComponent
  - https://github.com/LeggoMyLego/ProductComponent

## Table of Contents


## Usage

> Some usage instructions
npm run start
  - starts server
npm run react-dev
  - starts webpack
