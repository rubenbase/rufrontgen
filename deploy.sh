#!/bin/sh

# we build the server with lerna
yarn build:server

# we build the docker image to the latest version 
docker build -t rubencostam/rufrontgen:latest

# we push the new built docker image to ducker hub
docker push @rubencostam/rufrontgen:1.0.0
