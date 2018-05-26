FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html

ADD . /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/.git /usr/share/nginx/html/Dockerfile
