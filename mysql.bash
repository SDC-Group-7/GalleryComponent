#!/bin/sh

docker run --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD='yes' -d mysql:5.7