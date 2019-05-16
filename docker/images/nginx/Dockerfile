FROM nginx:1.15-alpine

COPY src/ /srv/gits/web
COPY docker/images/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /etc/nginx/

EXPOSE 80