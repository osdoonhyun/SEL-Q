FROM node:18-alpine
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci --force
COPY --chown=node:node . .
USER node

