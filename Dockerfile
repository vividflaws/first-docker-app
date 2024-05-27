FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls -al /app

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]

