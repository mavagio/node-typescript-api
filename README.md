# Node/Express.js/TypeScript + mongoDB

<img height="100px" alt="nodejs" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg">
<img height="100px" alt="TypeScritpt" src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"> 
<img height="100px" alt="Mongo" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png">
<hr>

## Getting started
Before starting the API locally make sure you have:
- [Node.js](https://nodejs.org) installed
- Have mongoDB running locally (You can also provision mongoDB instance as a service and the URI to connect to it, see next section)

Install dependencies:
```
npm i
```
Start the API
```
npm run start:dev
```

You can now navigate to `http://localhost:3000/api/user` endpoint, 

The following makes a request to `/user` endpoint to retrieve all the entries for users model in the database.<br>
You can post a new entry to the same endpoint using e.g. [Postman](https://www.getpostman.com/).

Post:
```
http://localhost:3000/api/user
```
Request Body
```
{
	"name": "YourName",
	"email": "YourEmail@gmail.com",
	"type": 1
}
```

## Connect database-as-a-service
Connect provisioned mongoDB instance (e.g. [MLab](mlab.com)) by providing the host URI in the `.env` file:

Create `.env` file in the root directory (note: do not commit any secrets)

```
PORT=3000
NODE_ENV='development'
PROD_DB='mongodb://<username>:<userpassword>@<host>.mlab.com:<port>/<dbname>'
DEV_DB='mongodb://localhost/dbname'
```

Start the the API using `npm run start:prod` the program will pick up the MongoDB URI from `.env` file.
