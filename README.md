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

- Documentation
- Adding CLI for multiple starter kits

## Installation

```bash
  # Replace Yarn with NPM if using default package manager.

  $ yarn install
```

**On Docker**

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

## License

This project is licensed under the MIT license.

If you have any questions or comments, please create a new issue. I'd be happy to hear your thoughts.

<p align="center">
<img src="https://github.com/faisalhmohd/jhal-muri/raw/master/assets/bangladesh.jpg" height="20" style="max-width:100%;">
</p>
