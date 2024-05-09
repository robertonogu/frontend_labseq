FROM node:alpine

WORKDIR /frontend

COPY . /frontend

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]