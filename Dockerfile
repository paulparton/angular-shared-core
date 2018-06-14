# base image
FROM node:9.6.1

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

EXPOSE 4200

# set working directory
# RUN mkdir /usr/src/app
WORKDIR /angular-shared-features

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies

RUN npm install
RUN npm install -g @angular/cli@6.0.8 --unsafe

# add app
# COPY . /usr/src/app

# start app
CMD ng serve web-app --host 0.0.0.0
