## Day 1 
- Server setup, cors, dotenv configurations (like, i created the express app in app.js -> imports it in the server.js -> created the server using the express app &start listening)

- Connection to local DB & creating the user authentication
    - create user schema , using jwt for token generations and bcrypt for password hashing for authentication , in user model itself
    - import the user model in the user controller & code the user authentication (signup, signin, get profile, logout)
    - created the user routes & to validate the data coming as a req (whether it could be user data or something else), use express-validator as a middleware
    - before coding user controller , lets make a service that will interact with the mongoDB (user.service.js) [like to create the user in db]
    - created register, login controller & code them


# Day 2
- creting getProfile routes & Coding the get user profile controller
    - before that coding the auth middleware first
    - putting the middleware before the controller, so that u can authenticate the user before get its user profile
    - installing cookie-parser & configuring it in app.js so that i can receive the data coming from the cookie

- creting logout routes & Coding the logout controller
    - first we need to create the model blackListToken to auto delete in 24 hr from the DB document when user clicks on the logout button

# Day 3
- Creating Captain Functionality (same as user)    
    - setting up captain model , new controller & routes for captain && configuring it into app.js
    - making same kind of service like user service but this one will be for captain for creating the captain in DB
        - coding the register captain controller
        - creating getProfile routes & Coding the get captain profile controller
        - before that coding the auth middleware first
    - putting the middleware before the controller, so that u can authenticate the captain before get its user profile
    - creting logout routes & Coding the logout controller (same as users)


## Frontend : creating user and captain forms
- creating pages , installing react-router-dom & wrap then app component with browser router   
- creating routes in App.jsx 
- MAKING 
    - initial launch page (to goes to login)
    - user login page & captain login page
    - user signup, captain signup
    - using context API to centralize data
        - created userContext.ksx -> wrap the app compenent with the userContext as a top of browserRouter