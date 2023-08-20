FROM node:18-bullseye-slim

# RUN apt-get update -y && apt-get install -y \

WORKDIR /app
COPY . .
RUN npm install

CMD ["npm", "start"]
