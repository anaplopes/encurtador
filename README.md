# Api Encurtador de Url

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file

DEV
3. Run `npm run dev` command

PROD
3. Run `npm run build` command
4. Run `npm run start` command

DOCKER
3. Run `docker-compose up -d` command


## Endpoint:

### Status da API
| Methods  | Actions                | Url                                         |
|:--------:|:-----------------------|:--------------------------------------------|
| GET      | status da api          | {{url}/                                     |


### Statistic
| Methods  | Actions                | Url                                         |
|:--------:|:-----------------------|:--------------------------------------------|
| GET      | statistic general      | {{url}}/stats                               |
| GET      | statistic url          | {{url}}/stats/:id                           |


### Users
| Methods  | Actions                | Url                                         |
|:--------:|:-----------------------|:--------------------------------------------|
| GET      | get stats user         | {{url}}/users/:userid/stats                 |
| POST     | create user            | {{url}}/users                               |
| DELETE   | delete user            | {{url}}/users/:userid                       |
| POST     | create url             | {{url}}/users/:userid/urls                  |


### Urls
| Methods  | Actions                | Url                                         |
|:--------:|:-----------------------|:--------------------------------------------|
| GET      | redirect original url  | {{url}}/urls/:id                            |
| DELETE   | delete url             | {{url}}/urls/:id                            |
