FROM node:18-alpine as build

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

WORKDIR /app

COPY . /app/

RUN npm install

RUN npm run build

FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]