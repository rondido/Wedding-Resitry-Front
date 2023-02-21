FROM node:16.17.0

WORKDIR /app

COPY package.json .

RUN npm install -g

COPY . .

EXPOSE 9091

CMD ["npm", "start"]
