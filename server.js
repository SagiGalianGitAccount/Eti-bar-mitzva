const express = require("express");
const cors = require("cors");

const app = express();
const corsOptions = {
    origin: [
      "https://singular-gumption-1efb7d.netlify.app",
      "http://localhost:3000",
      "https://serene-torrone-8fa0ca.netlify.app",
    ],
    allowedHeaders: ["Content-Type"],
    exposedHeaders: ["Access-Control-Allow-Origin"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
app.use(cors(corsOptions));


const PORT = 3001 || process.env.PORT;

const {userRouter} = require('./routes/users');
app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log('Server is running...')
})