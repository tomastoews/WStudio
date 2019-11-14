FROM nginx:alpine

RUN mkdir usr/share/nginx/html/wstudio
COPY /dist/ usr/share/nginx/html/wstudio

EXPOSE 80