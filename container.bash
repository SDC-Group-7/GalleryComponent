#!/bin/sh

docker build -t gallery .
docker run -d -p 3001:3001 -v $(pwd):/src/GalleryComponent --name gallerycontainer gallery
# docker exec gallerycontainer npm run seed-db
