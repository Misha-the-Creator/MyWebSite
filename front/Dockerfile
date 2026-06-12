FROM node:24.15.0 AS builder

WORKDIR /front

COPY ./package*.json ./

RUN --mount=type=cache,target=/root/.npm npm ci

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS runner
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /front/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]