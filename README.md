# E Commerce API

## Table of Contents
- [Description](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
	- [Resources](#resources)
- [Tests](#tests)
- [Issues/Questions](#issuesquestions)
- [Contributing](#contributing)

## Description
An api used to manage categories of products, different products, and different attributes of those products for an e-commerce store.

## License
[![MIT License](https://img.shields.io/badge/MIT_License-blue)](https://choosealicense.com/licenses/mit/)

## Installation
First, clone the repo at `git@github.com:ryansheehy0/E_Commerse_API.git`.<br><br>Second, run `npm install` in the Develop folder in order to install the npm packages.<br><br>Third, run `mysql -u root -p` and type in your password. Note: you need a MySQL server installed.<br><br>Forth, run `source ./db/schema.sql;` in your MySQL server.<br><br>Fifth, run `npm run seed` in you terminal.<br><br>And finally, run `node server.js` to start the server.

## Usage
You can go to multiple different API links to get, create, update, and delete data.
- GET or POST http://localhost:3001/api/ tags, products, or categories
- GET, PUT, or DELETE http://localhost:3001/api/ tags, products, or categories /:id

API Examples:

POST http://localhost:3001/api/tags/
- Body

```
{
	"tag_name": "green"
}
```

POST http://localhost:3001/api/products/
- Body

```
{
	"product_name": "Basketball",
	"price": 200.00,
	"stock": 3,
	"tagIds": [1, 2, 3, 4]
}
```

POST http://localhost:3001/api/categories/
- Body

```
{
	"category_name": "Underwear"
}
```


[video](https://drive.google.com/file/d/122-mbiFLiQrdKkeWxD-htPk5_t5OfGJc/view?usp=sharing)

## Credits

### Resources
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://www.npmjs.com/package/sequelize)

## Tests
Just [install](#installation) the project and follow the steps for [using](#usage) the app.

## Issues/Questions
On the [github page](https://github.com/ryansheehy0/E_Commerce_API) just click on the issues tab and then click the New issue button. Please try to leave a description of your problem and what steps you took that lead to the problem.

If you have any questions or issues feel free to reach out to me at

Github: [ryansheehy0](https://github.com/ryansheehy0)

or

Email: ryansheehy0@gmail.com

## Contributing
Just clone the repo, make your changes, push to a new branch, and make a pull request on github.