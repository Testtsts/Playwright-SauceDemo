FROM node:22.2.0

WORKDIR /app
COPY . ./

RUN npm install

RUN npx -y playwright install --with-deps chrome

