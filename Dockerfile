FROM node:16 AS angular

WORKDIR /build/client
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY .browserslistrc .
COPY tsconfig.json .
COPY tsconfig.app.json .
COPY angular.json .
COPY tailwind.config.js .
COPY postcss.config.js .
COPY src src

COPY tsconfig.spec.json .

RUN npx ng build --prod

########################################
FROM nginx:1.17.9-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=angular /build/client/dist/portfolio /usr/share/nginx/html
