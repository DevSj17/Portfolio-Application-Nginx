FROM node:16

WORKDIR /app

COPY index.html .
COPY package.json .
COPY server.js .
COPY images ./images

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]