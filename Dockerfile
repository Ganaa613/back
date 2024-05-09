# build
FROM node:21-alpine as builder
WORKDIR /app

COPY . .

RUN yarn config set strict-ssl false
RUN yarn
RUN yarn eslint
RUN yarn build:prod
RUN yarn install --prod

# production
FROM node:21-slim
WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/.env /app/.env
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 3000

CMD ["node", "./dist/server.js"]


