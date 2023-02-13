# NestJS application

## ! In that project I used Docker compose to run the application and the database

## Description

Project created with NestJS framework, MongoDB with Mongoose and Docker compose. Also used external dog API to get random dog images and breeds.

https://dog.ceo/dog-api

## Running the app

1. Create .env file in the root directory and add the following variables:

```
APP_PORT=3000
MONGODB_URL=mongodb://mongodb:27017/Dogs
```

2. Run the following command in the root directory:

```
docker-compose up --build
```

## Functionalities

Check the swagger documentation to see all the endpoints and their functionalities:

```
http://localhost:3000/api
```

## Main feature - QUIZ!

### Flow

1. Use GET /quiz endpoint to get a random dog image and 3 breeds to choose from
2. Use POST /quiz endpoint to check if the answer is correct

Quiz objects are stored in the database and can be accessed with GET /quiz/:id endpoint
