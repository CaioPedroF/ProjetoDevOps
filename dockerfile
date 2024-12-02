# Use uma imagem Node.js como base
FROM node:14

# Crie um diretório de trabalho
WORKDIR /app

# Copie os arquivos do projeto
COPY . .

# Instale as dependências
RUN npm install

# Execute o build
RUN npm run build

# Use uma imagem do Nginx para servir o aplicativo React
FROM nginx:alpine

# Copie os arquivos de build do React para o diretório de conteúdo estático do Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exponha a porta
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
