#!/bin/sh
yarn build:server
docker build -t rubencostam/rufrontgen:latest