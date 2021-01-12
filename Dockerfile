FROM node

ARG NODE_ENV

WORKDIR /app

COPY ./ .

RUN npm install

RUN npm install pm2 -g

CMD [ "pm2-runtime", "npm", "--", "start" ]
