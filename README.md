# SHOP IT
>eCommerce platform built with the MERN stack & Redux.

![Shop IT](https://raw.githubusercontent.com/Noormohammad011/react-portfolio/main/src/assets/img/projects/shopIt.png)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Full featured shopping cart
- Top products carousel
- Product search feature & Product pagination
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration

### Install Dependencies
```
git clone 
cd directory_name
yarn i or npm i

```
### Env Variables
Create a .env file in then root and add the following
```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```
### Run
```
npm run start

#development 
npm run start:Dev
```
### Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data
```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

### Rest Endpoints

- [x] GET /api/products - Get all products
- [x] GET /api/products/:id - Get single product
- [x] POST /api/products - Create new product
- [x] PUT /api/products/:id - Update product
- [x] DELETE /api/products/:id - Delete product
- [x] POST /api/products/:id/reviews - Create new review
- [x] GET /api/products/top - Get top rated products
- [x] GET /api/users/profile - Get user profile
- [x] PUT /api/users/profile - Update user profile
- [x] POST /api/users - Register a new user
- [x] POST /api/users/login - Auth user & get token
- [x] GET /api/users - Get all users
- [x] DELETE /api/users/:id - Delete user
- [x] GET /api/orders - Get all orders
- [x] GET /api/orders/:id - Get single order
- [x] POST /api/orders - Create new order
- [x] PUT /api/orders/:id/pay - Update order to paid paypal
- [x] PUT /api/orders/:id/stripe - Update order to paid stripe
- [x] PUT /api/orders/:id/deliver - Update order to delivered




### Demo
Here you can see [:link:demo](https://shopit-menia.netlify.app/) [:link:backend](https://shy-cyan-squid-wear.cyclic.app/api/products)

### 🚀 About Me
I'm a full stack developer & passionate to do my designation's responsibility and hungry to explore new technology.

### 🛠 Skills
Javascript, React, Redux, Node, Express, MongoDB, Mongoose, Bootstrap, Material UI, HTML, CSS, Git, Github, Heroku, Netlify, Firebase, VS Code, Chrome Dev Tools, Postman, etc.

### 📫 How to reach me:
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=100007513814577)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/noor-mohammad-a39415218/)




### Special Thanks 
:black_heart::black_heart: Brad Traversy :black_heart::black_heart:
