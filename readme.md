# Events Registration App

### 👋 Welcome to the app!

With this application, you can discover interesting events and register for them.

## Tech Stack

The project builds RESTful APIs using Node.js, Express and Mongoose

<p align="left"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="70" height="60"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="60" height="50"/>
<img src="https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png" height="30"></p>

## Manual Installation

#### Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

Clone the repo:

```bash
git clone https://github.com/AndriiSkliar/eliftech-node.git
cd backend-drink-master
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env
# open .env and modify the environment variables
```

## Commands

Running in development:

```bash
npm start
# or
npm run dev
```

## Environment Variables

The environment variables can be found and modified in the `.env` file.

```bash

# Host
DB_HOST = mongodb://127.0.0.1:27017/database_name

# Port
PORT = 3000

```

## Project Structure

```
 |--controllers\    # Controllers
 |--helpers\        # Help functions
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models
 |--routes\         # Routes
 |--app.js          # Express
 |--server.js       # Database connection
```

## Link to Frontend Repo

To start using our app, go to the [link](https://andriiskliar.github.io/eliftech-react/) and enjoy the app's features 😎
