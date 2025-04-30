FROM node:20-alpine

WORKDIR /app
COPY front/package.json front/pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY front .

EXPOSE 3000
CMD ["pnpm", "dev"]