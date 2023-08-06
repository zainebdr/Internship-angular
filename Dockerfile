# Base image
FROM node:14
# Set the working directory
WORKDIR /app
COPY . .
# Install dependencies
#RUN npm install 
# Expose the port used by the Angular app
EXPOSE 4200        
# Build the Angular app 
RUN npm install -g npm@latest
RUN npm install -g @angular/cli
#RUN npm install
# Command to start the Angular app
#CMD ["npm", "start"]
#ENTRYPOINT ["npm", "start"]
CMD ["ng", "serve", "--host=0.0.0.0"]