FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Construction du projet Vite avec l'URL backend à injecter
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Installer vite en global pour servir le build (en mode preview prod)
RUN npm install -g vite

EXPOSE 4173

CMD ["npm", "run", "dev"]
