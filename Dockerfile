FROM node:lts

MAINTAINER "Andrea Accardo"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src/ src/

COPY public/ public/

COPY jest.config.js next.config.js next-env.d.ts tsconfig.json postcss.config.js tailwind.config.js ./

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
