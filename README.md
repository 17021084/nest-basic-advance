# Nest.js Cheatsheet

## Nest CLI

- `npm i -g @nestjs/cli`

## Packages

- `yarn add class-validator class-transformer`
- `yarn add @nestjs/mapped-types`

## Commands

- `nest generate --help`
- `npm run start:dev` / `yarn start:dev`
- `nest generate controller` / `nest g co`
- `nest generate service` / `nest g s`
- `nest generate module <name>` / `nest g mo`
- `nest g class address/dto/create-address.dto --no-spec`

## Decorators

- `@Injectable()`: Make a resource injectable via DI
- `@Controller('route')`:
- `@Get()`, `@Post('user/:id/update')`
- `@HttpCode(HttpStatus.GONE)`: Change http status
- `@Param() params`: All url params, `@Param('id')`: Only id param
- `@Query() params`: All url params, `@Query('id')`: Only id param
- `@Body() body`: All body values, `@Body('id')`: Only id value
- `@Res() response`: Response object from express
- `@IsNumber()`, `@IsString()`: Validations

## Imports

- `import { Body, Controller, Get, Param, Post } from '@nestjs/common';`
- `import { IsNumber, IsString } from 'class-validator';` - Validation

## Run project with nodemon

```
yarn run debug
it will run nodemon
node --inspect=0.0.0.0:5858 -r ts-node/register ./src/main.ts
build and run
```
