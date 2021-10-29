# Duck collector

This web app is a website that allows user to submit and review duck feed information.

### Built with

[Express] (http://expressjs.com/)

React.js, bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

MySQL version 8.0.23

[Bootstrap](https://react-bootstrap.github.io/)

## Getting Started

### Prerequisites

To build and run the application you need:

- [Node >= 14.0.0 and npm >= 5.6](https://nodejs.org/en/)
- install npm-install package

   ```cmd
   npm i npm-install
   ```

### Installing

1. Clone the repository

   ```git
   git clone git@github.com:jinjialij/duck-collector.git
   ```

2. Install NPM packages

   ```cmd
   npm install
   ```

> **Note**  
> This application connects to a cloud hosting database by default.

3. **(Optional)** Use your own/local database

   i. add database credentials in your environment variable

   ```json
   "DB_HOST": "Hostname"
   "DB_USER": "Username"
   "DB_PASSWORD": "Password"
   "DB_NAME": "DatabaseName"
   ```

   ii Run `schema.sql` in MySQL workbench or other database tool

## Run application locally

### Run react app

In the project directory, open terminal to run: `npm start`  
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Run server

Open another terminal, run: `node app.js`  
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### Running the tests

`npm test`

### Deployment

Run `npm run build`
