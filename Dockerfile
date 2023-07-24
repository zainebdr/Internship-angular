# Base image
FROM node:14
# Set the working directory
WORKDIR /app
ENV PATH /usr/src/app/node_modules/.bin;$PATH
COPY . .
# Install dependencies
#RUN npm install 
# Expose the port used by the Angular app
EXPOSE 4200        
# Build the Angular app 
RUN npm install -g npm@latest
#RUN npm run build

# Command to start the Angular app
#CMD ["npm", "start"]
#ENTRYPOINT ["npm", "start"]
CMD ["ng", "serve", "--host=0.0.0.0"]