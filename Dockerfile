
# --- Stage 1: Build ---
FROM node:20-alpine3.18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx nest build

# --- Stage 2: Run ---
FROM node:20-alpine3.18 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY --from=build /app/dist /app/dist

ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["node", "/app/dist/main"]
