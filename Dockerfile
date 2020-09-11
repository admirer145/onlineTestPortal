#Stage1

FROM node:12.18-alpine AS build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

#Stage2

FROM nginx:1.19-alpine
COPY --from=build-step /app/dist/onlineTestPortal /usr/share/nginx/html
