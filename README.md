# demo-nest-prisma-postgres-docker
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

Run docker
Run ```bash docker-compose up``` to compile and run docker postgres database 

Go to hello-prisma folder run ```bash $ npm install and $ npm run start ``` to run the application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
Go to localhost:3000/api for Swagger 

## Routing endpoint
```bash
POST   localhost:3000/user  		Example: {name: 'TuanPA', role: '4'} 
GET    localhost:3000/users
DELTE  localhost:3000/user/:id
PUT    localhost:3000/user/:id   	Example: {name: 'TuanPA', role: '4'}

POST   localhost:3000/role              Example: {title: 'admin'} 
GET    localhost:3000/role/:id
GET    localhost:3000/roles
DELETE localhost:3000/role/:id
PUT    localhost:3000/role/:id   	Example: {title: 'guest'}
GET    localhost:3000/filtered-roles/:searchString Example: ocalhost:3000/filtered-roles/admin
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
