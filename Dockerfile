FROM node

# Create app directory
WORKDIR /rufrontgen

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

# If you are building your code for production
# RUN npm install --only=production
RUN npm i -g yarn
RUN yarn install --production

COPY ./packages/server/dist ./packages/server/
COPY ./packages/common/dist ./packages/server/
COPY ./packages/server/.env.prod ./packages/server/
COPY ./ormconfig.json .


WORKDIR ./packages/server

ENV NODE_ENV production

EXPOSE 80

CMD ["node", "dist/index.js"]