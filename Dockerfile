FROM node:16-alpine

COPY . /simple-toggler

WORKDIR /simple-toggler

RUN yarn

WORKDIR /simple-toggler/dist

ENTRYPOINT ["node", "index.js"]