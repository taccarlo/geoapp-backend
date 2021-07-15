# Geoapp back-end

This project was bootstrapped with [Strapi CMS](https://github.com/strapi/strapi).

## Prerequisites

You should have these programs installed on your OS.

- Docker
- Node.js
- Yarn package manager
- Android Studio (optional)

## Available Scripts

In the project directory, you can run:

### `docker compose up`

Runs a PostgreSQL database inside a docker container, Check these files for more info:

- ./docker-compose.yml
- ./config/database.js

### `yarn develop`

Runs the app in the development mode.

### `yarn build`

Generate a production build/

## Running in development

1. Clone the repository

```
git clone https://github.com/ahmedaidev/geoapp-backend.git
cd geoapp-backend
```

2. Run PostgreSQL database

```
docker compose up
```

3. Inside another terminal in the same directory

```
yarn
yarn develop
```

Open [http://localhost:5000](http://localhost:5000) to view it in the browser then create an Admin account.

4. Change permissions.

```
Settings > USERS & PERMISSIONS PLUGIN  > Roles > Public
```
