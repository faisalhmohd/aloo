[logo]: https://github.com/faisalhmohd/jhal-muri/raw/master/assets/logo.png "Aloo Logo"
[heart]: https://github.com/faisalhmohd/jhal-muri/raw/master/assets/heart.png
[bangladesh]: https://github.com/faisalhmohd/jhal-muri/raw/master/assets/bangladesh.jpg

<img src="https://github.com/faisalhmohd/jhal-muri/raw/master/assets/logo.png" height="120" >

# Aloo - the base to your *torkari* (project).

An easy starting point with NodeJS, ExpressJS, SASS, ReactJS and Redux. Includes testing and docker integration for cross OS development.

## Why Aloo instead of other stacks?

- Watching throughout development, both client and server. Testing too! Dramatically speeds up development.
- Easily plug in any DB of choice
- Docker integration for cross OS development
- ES6 to leverage the latest JavaScript features
- SASSify your stylesheets
- ReactJS server side rendering with Redux for state management

## Things to do

- Production setup and deployment
- Documentation
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
<img src="https://github.com/faisalhmohd/jhal-muri/raw/master/assets/heart.png" height="24"> &nbsp; from &nbsp; <img src="https://github.com/faisalhmohd/jhal-muri/raw/master/assets/bangladesh.jpg" height="20" >
