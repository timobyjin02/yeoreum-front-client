FROM node:16.15.1 AS builder

WORKDIR /home/app

COPY ./yeoreum .

RUN npm install --force npm@8.19.2

CMD ["npm", "run", "dev"]
