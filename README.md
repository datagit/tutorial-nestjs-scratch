## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

```bash
# guide: https://github.com/datagit/nest/tree/master/sample/01-cats-app/src/cats
mkdir src/cats
# create type cat
mkdir src/cats/interfaces && touch src/cats/interfaces/cat.interface.ts

# create dto and validator class CreateCatDto
# validator -> import { IsInt, IsString } from 'class-validator'; -> "class-validator": "0.13.1",
mkdir src/cats/dto && touch src/cats/dto/create-cat.dto.ts

# create CatsService
touch src/cats/cats.service.ts

# create CatsController
touch src/cats/cats.controller.ts

# create CatsModule
touch src/cats/cats.module.ts

# auto-validation
# https://docs.nestjs.com/techniques/validation#auto-validation

# logger: https://docs.nestjs.com/techniques/logger

# testing: https://docs.nestjs.com/fundamentals/testing
touch src/cats/cats.controller.spec.ts
npm run test

# -> src/cats/cats.e2e-spec.ts
npm run test:e2e

# database
npm install --save @nestjs/typeorm typeorm mysql2
npm install --save @nestjs/mongoose mongoose

# create schema
mkdir src/cats/schemas
touch src/cats/schemas/cat.schema.ts

curl --location --request POST 'http://localhost:3000/cats' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "abc1",
  "age": 111,
  "breed": "xxx1"
}'
```
