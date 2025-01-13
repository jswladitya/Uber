## Day 1 
- Server setup, cors, dotenv configurations (like, i created the express app in app.js -> imports it in the server.js -> created the server using the express app &start listening)

- Connection to local DB & creating the user authentication
    - create user schema , using jwt for token generations and bcrypt for password hashing for authentication , in user model itself
    - import the user model in the user controller & code the user authentication (signup, signin, get profile, logout)
    - created the user routes & to validate the data coming as a req (whether it could be user data or something else), use express-validator as a middleware
    - before coding user controller , lets make a service that will interact with the mongoDB (user.service.js) [like to create the user in db]