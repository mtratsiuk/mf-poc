FROM alpine:3.7

ENV projectDirectory /opt/app

RUN apk update && apk upgrade && \
  apk add --no-cache bash caddy

WORKDIR ${projectDirectory}

ADD app ./app
ADD Caddyfile ./Caddyfile

CMD ["caddy", "-conf", "Caddyfile"]

EXPOSE 3000
