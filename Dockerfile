FROM node:18-alpine as build

ARG VITE_BACKEND_URL
ARG VITE_GOOGLE_MAPS_API_KEY
ENV VITE_BACKEND_URL=https://petprotekt-api-xv7vrwqjca-uc.a.run.app
ENV VITE_GOOGLE_MAPS_API_KEY=AIzaSyDsMoaPnFemj6kdtU8hhkEtgtEgDvAGgOE

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