#!/bin/bash

PROJECT="${PWD##*/}"

docker build . -t p0rt23/"$PROJECT":latest &&
	docker run --rm --name "$PROJECT" p0rt23/"$PROJECT":latest
