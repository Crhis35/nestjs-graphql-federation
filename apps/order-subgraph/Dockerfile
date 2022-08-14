FROM node:lts-alpine AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN . .

FROM node:lts-alpine AS build

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

COPY --from=development /usr/src/app/node_modules ./node_modules

COPY . .

RUN yarn build order-subgraph

ENV NODE_ENV production

RUN yarn install --frozen-lockfile --production && yarn cache clean

USER node


###################
# PRODUCTION
###################
FROM node:lts-alpine As production

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist/apps/order-subgraph ./dist

CMD [ "node", "dist/main.js" ]

EXPOSE 3001
