FROM nginx:1.15

RUN apt-get update
RUN apt-get install -y \
    sudo \
    nano

RUN apt-get update
RUN sudo apt-get install -y \
    php-fpm

COPY src/ /srv/gits/web/
COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["/bin/bash", "-c", "sudo service php7.0-fpm start && nginx -g 'daemon off;'"]