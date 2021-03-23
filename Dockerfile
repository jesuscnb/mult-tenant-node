FROM adrianokowalski/node-pm2:15.12.0-alpine3.12

ARG NODE_ENV

WORKDIR /app

COPY ./ .

RUN npm install

CMD [ "pm2-runtime", "npm", "--", "start" ]
