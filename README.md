# NestJS Swagger Issue - Response type lost

Example application showing that response type information is lost when a ApiOkResponse decorator has been specified.

Related issue [nestjs/swagger#701](https://github.com/nestjs/swagger/issues/701)

## Usage

### Installation

Install nest cli:

```bash
sudo npm i -g @nestjs/cli
```

Clone this repo:

```bash
git clone https://github.com/zesbytes/nestjs-swagger-response-type-lost.git
```

Install dependencies

```bash
npm i
```

Start nest application

```bash
npm run start
```

### Check swagger documentation

1. Open a browser at <http://localhost:3000/api>
2. Check the response declaration details. The description is present but type information is missing.
3. Remove the use of ApiOkDecorator from src/app.controller.ts. Start the application again. Type information for the response is now present.
