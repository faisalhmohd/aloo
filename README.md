[logo]: https://github.com/faisalhmohd/jhal-muri/raw/master/logo.svg "Jhal Muri Logo"

![alt text][logo]

# jhal-muri

jhal-muri is an easy starting point with NodeJS, ExpressJS, SASS, ReactJS and Redux. Includes testing and docker integration for cross OS development.

## Why jhal-muri instead of other stacks?

- Watching throughout development, both client and server. Dramatically speed development.
- Easily plug in any DB of choice
- Docker integration for cross OS development
- ES6 to leverage the latest JavaScript features
- SASSify your stylesheets
- ReactJS server side rendering with Redux for state management
- Test watching enabled for test-driven development

## Things to do

- Production setup and deployment
- Documenation
- Adding CLI for multiple starter kits

## Setup

With Docker

```bash
  # For Development

  # Building Image
  $ docker-compose -f development.yml build client

  # Develop on ReactJS
  $ docker-compose -f development-client.yml up

  # Develop on NodeJS
  $ docker-compose -f development-server.yml up

  # Test Simultaneously by opening a new Terminal
  $ docker exec -it [CONTAINER_ID] npm run start-test-watch

```

Without Docker

```bash
  $ npm i

  # Develop on ReactJS
  $ npm run start-client-watch

  # Develop on NodeJS
  $ npm run start-server-watch

  # Develop and Test
  $ npm run start-test-watch
```
