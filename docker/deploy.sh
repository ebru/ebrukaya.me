#!/usr/bin/env bash

docker --version
pip install --user awscli
export PATH=$PATH:$HOME/.local/bin

eval $(aws ecr get-login --region $AWS_DEFAULT_REGION)

# build the docker images and push to image repositories
docker-compose -f docker-compose-prod.yml up -d --build

docker tag ebrukayame_web:latest $IMAGE_REPOS_BASE_URL/ebrukayame_web:latest
docker push $IMAGE_REPOS_BASE_URL/ebrukayame_web:latest

docker tag ebrukayame_php-fpm:latest $IMAGE_REPOS_BASE_URL/ebrukayame_php-fpm:latest
docker push $IMAGE_REPOS_BASE_URL/ebrukayame_php-fpm:latest