# Usa una imagen base de Node.js (elige la versión que necesitas)
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /src 

# Copia el archivo package.json y package-lock.json (si existe) al contenedor
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install --production

# Copia todo el código fuente de tu proyecto al contenedor
COPY . .

# Expone el puerto que usa tu aplicación (Render asigna automáticamente el puerto, pero se sugiere 3000 por defecto)
EXPOSE 3000

# Define el comando para ejecutar tu aplicación
CMD ["npm", "dev"]
