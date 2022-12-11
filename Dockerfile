FROM node:16.3.0-alpine


COPY . . 

RUN npm install


ENTRYPOINT [ "npm", "run", "start" ]