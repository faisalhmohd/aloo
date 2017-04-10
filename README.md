<p align="center">
<img src="https://github.com/faisalhmohd/jhal-muri/raw/master/assets/logo.png" height="120" >
</p>

# Aloo - the base to your *torkari* (project).

An easy starting point with NodeJS, ExpressJS, SASS, ReactJS and Redux. Includes testing and docker integration for cross OS development.

## Why Aloo instead of other stacks?

- Watching throughout development, both client and server. Testing too! Dramatically speeds up development.
- Easily plug in any DB of choice
- Docker integration for cross OS development
- ES6 to leverage the latest JavaScript features
- SASSify your stylesheets
- ReactJS server side rendering with Redux for state management

## Installation

**Note** - It is preferred to develop on *Docker* since it insures cross OS compatibility of your project codebase.

**Prerequisites**
- NodeJS 6.10
- Yarn v0.21.3 or NPM v3.10.10

```bash
  # Replace Yarn with NPM if using default package manager.
  $ git clone https://github.com/faisalhmohd/aloo.git
  $ cd aloo
  $ yarn install
```

### On Docker

**Prerequisites**
- Docker
- Docker Compose

```bash
  $ docker-compose build
```

## Development

```bash
  # Replace Yarn with NPM if using default package manager.

  # Develop on ReactJS
  $ yarn run start-client-watch

  # Develop on NodeJS
  $ yarn run start-server-watch

  # Testing
  $ yarn run start-test-watch
```

**On Docker**

```bash
  # Develop on ReactJS
  $ docker-compose -f development-client.yml up

  # Develop on NodeJS
  $ docker-compose -f development-server.yml up

  # Testing. Works even during development.
  $ docker-compose -f test.yml up

```

## Production

Manage your processes and application states using PM2.

**On Docker**

```bash
  # Build the server. Only required when there is code change since last run.
  $ docker-compose -f production-build.yml up

  # Run the server in daemon
  $ docker-compose -d up

```

Not sure where to deploy? [DigitalOcean](http://www.digitalocean.com) is a great choice for most projects.

## Project Structure

```bash
├── assets # Repo readme assets
├── base.yml # Base Docker Compose file
├── bin
│   └── app.js # Starting point to your project
├── client # All ReactJS code goes here
│   ├── components
│   │   ├── app.js
│   │   ├── home.js
│   │   └── notfound.js
│   ├── index.js
│   ├── reducers # Redux for state management
│   │   ├── header.js
│   │   └── index.js
│   └── routes.js
├── development-client.yml # Docker Compose for ReactJS development
├── development-server.yml # Docker Compose for NodeJS development
├── docker-compose.yml # Docker Compose for Production
├── Dockerfile # To build Docker image
├── LICENSE.md
├── nodemon.json # Nodemon configuration
├── package.json # Project Dependencies
├── production-build.yml # Docker Compose to build production
├── public # Static public assets go here
│   ├── bundle.js
│   └── main.css
├── README.md
├── scss # SASS stylesheets go here
│   ├── home.scss
│   └── main.scss
├── server # All NodeJS code goes here
│   └── index.js
├── tests # All Jest tests go here
│   └── app.test.js
├── test.yml # Docker Compose for Test driven development
├── views # All server side rendered views go here
│   └── index.pug
└── webpack.config.dev.js # Webpack configuration
```

## Tutorials

- NodeJS - https://nodeschool.io/
- ReactJS - https://facebook.github.io/react/tutorial/tutorial.html
- Redux - https://egghead.io/courses/getting-started-with-redux
- Jest - https://facebook.github.io/jest/docs/getting-started.html
- ES6 - https://babeljs.io/learn-es2015/
- SASS - http://sass-lang.com/guide
- Pug - https://pugjs.org/api/getting-started.html
- Webpack - https://webpack.js.org/guides/get-started/
- Docker - https://docs.docker.com/learn/

## Things left to do

- Documentation
- Adding CLI for multiple starter kits
- Tests

## License

This project is licensed under the MIT license.

If you have any questions or comments, please create a new issue. I'd be happy to hear your thoughts.

<p align="center">
<img src="https://github.com/faisalhmohd/jhal-muri/raw/master/assets/bangladesh.jpg" height="20" style="max-width:100%;">
</p>
