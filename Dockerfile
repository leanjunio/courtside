FROM node:18-slim

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

EXPOSE 3333 9229 9230

RUN apt-get update
RUN apt-get install -y curl
RUN npm i npm@latest -g

RUN mkdir /opt/node_app && chown node:node /opt/node_app
WORKDIR /opt/node_app

USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci && npm cache clean --force
ENV PATH /opt/node_app/node_modules/.bin:$PATH

WORKDIR /opt/node_app/app
COPY --chown=node:node . .

CMD [ "npm", "run", "dev" ]