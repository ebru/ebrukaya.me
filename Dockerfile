FROM nginx:1.15

COPY src/ /srv/gits/web/
COPY docker/nginx/conf.d/ /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]