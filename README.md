# Ecommerce Shop Template

  <img src="https://github.com/george-mix/ecommerce_webshop/blob/main/_gif/shop.gif?raw=true" alt="shop.gif" />                                               <img src="https://github.com/george-mix/ecommerce_webshop/blob/main/_gif/basket.gif?raw=true" alt="basket.gif" />                                           <img src="https://github.com/george-mix/ecommerce_webshop/blob/main/_gif/admin.gif?raw=true" alt="admin.gif" />
                                                                                                                                                                                      
## Overview

  | service    | technology |
  |:--------:|:-------:|
  | client | React / Redux Toolkit|
  | server | Express / Sequelize |
  | db | PostgreSQL |
  
## Setup

If you want to run this project on your local machine:

### Database
Make sure that you have PostgreSQL installed on your computer!
```
$ psql postgres
$ CREATE DATABASE ecommerce_webshop;
```
After creating database go to `server/.env` and change the  `DB_USER`, `DB_PASSWORD` fields according to your username and password.
Also, you can change `SECRET_KEY` if you want to have your own JWT key.


### Server
In `server` directory create empty folder called `static`.
This folder will hold our img files.

```
$ npm install 
$ npm run dev
```

### Client
```
$ npm install
$ npm start
```
### Create Admin Profile
In order to create an admin profile we need to send a `POST` request to `http://localhost:5000/api/admin/registration`.
With Header: `Content-Type: application/json;`.
And body: 
```
{
    "name": "admin", // your nickname
    "password": "12345" // your password
}
```
After this, go to `http://localhost:3000/admin` and enter your admin credentials.
