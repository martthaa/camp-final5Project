# Organic Store - MERN eCommerce Platform

project made as a homework assigment for Sigma Software

## Project Overview

The project is structured as follows:

- **Frontend:** The React-based frontend in the frontend directory. The application utilizes Redux for managing the app state, SCSS, Bootstrap.

- **Backend:** The backend, built on Node.js and Express, can be found in the backend directory. This is where I define routes that perform various actions such as handling products, orders, and users models.

## Workflow
[Link to the visualized workflow of the project in Figma](https://www.figma.com/file/9NfzB1X2GkTQbEpgOlKAl2/Organick?type=design&node-id=0%3A1&mode=design&t=Q3Ciujy2ZKBDLAJm-1)

## Features

- Full-featured shopping cart with quantity management.
- Product reviews and ratings.
- User profiles complete with order history.
- Admin panel for efficient product and user management.
- Detailed order information for administrators.
- Option to mark orders as delivered.
- Checkout process with payment options, including PayPal and credit card integration.
- Custom database seeder script to initialize the database.

## Authentication

I implemented a robust authentication system using JSON Web Tokens (JWT). To enhance security, the JWT is stored in an "Http-only" cookie on the server.

## Roles

The system supports two distinct roles:

- Regular users, who can make purchases and place orders.
- Administrators, who have extensive privileges, including managing products, users, and orders.

## Database

The application's data is stored in MongoDB, and we use Mongoose to connect to the database and execute queries.

## Getting Started

To get started with the project, follow these steps:

### Dependencies (both for frontend & backend)

```
npm install
cd frontend
npm install
```

### Run Frontend
```
npm run client
```

### Run Backend
```
npm run server
```

## Run Both

```
npm run dev
```
