# install AWS SDK
pip install --user awscli
export PATH=$PATH:$HOME/.local/bin

# login AWS ECR
eval $(aws ecr get-login --region eu-west-1)

cd docker

# build the docker images and push to image repositories
docker-compose -f docker-compose-prod.yml up -d --build

docker tag ebrukayame_web:latest $IMAGE_REPOS_BASE_URL/ebrukayame_web:latest
docker push $IMAGE_REPOS_BASE_URL/ebrukayame_web:latest

docker tag ebrukayame_php-fpm:latest $IMAGE_REPO_URL/ebrukayame_php-fpm:latest
docker push $IMAGE_REPO_URL/ebrukayame_php-fpm:latest