FROM node:alpine
WORKDIR '/app'
COPY pakage.json .
COPY package-lock.json
RUN npm install
COPY ..
CMD ["npm","start"]
