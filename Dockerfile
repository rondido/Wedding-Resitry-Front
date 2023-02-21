FROM node:16.17.0

WORKDIR /app

COPY package.json .

RUN yarn install -g

COPY . .

EXPOSE 5173

CMD ["yarn", "build"]

