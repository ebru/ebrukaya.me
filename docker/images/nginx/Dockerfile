FROM nginx:1.15-alpine

COPY src/assets/ /srv/gits/web/assets/
COPY src/index.php /srv/gits/web/
COPY docker/images/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /etc/nginx/

EXPOSE 80