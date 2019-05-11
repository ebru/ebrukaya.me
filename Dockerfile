FROM nginx:1.15

RUN apt-get update

RUN apt-get install -y \
    nano \
    php-fpm  

COPY src/ /srv/gits/web/
COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]