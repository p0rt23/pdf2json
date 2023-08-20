#!/bin/bash

PROJECT="${PWD##*/}"

docker image prune -f
docker build . -t p0rt23/"$PROJECT":latest &&
	docker run --rm --name "$PROJECT" p0rt23/"$PROJECT":latest
