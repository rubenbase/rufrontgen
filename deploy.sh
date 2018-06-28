#!/bin/sh
yarn build:server
docker build -t rubencostam/rufrontgen:latest
docker push @rubencostam/rufrontgen:1.0.0
