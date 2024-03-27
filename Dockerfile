#
# Build stage
#

FROM node:18-alpine as build
WORKDIR /frontend/

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#
# Package stage
#
FROM node:18-alpine as prod
WORKDIR /frontend/

COPY --from=build /frontend/ /frontend/

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript

EXPOSE 5173
CMD ["npm", "start", "--debug"]

