const express = require("express");
const cors = require("cors");

const app = express();
const corsOptions = {
    origin: [
      "https://admirable-stardust-6a2899.netlify.app",
      "http://localhost:3000",
      "https://resilient-dieffenbachia-dadf28.netlify.app",
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
const {guestsRouter} = require('./routes/guests');
const {invitationsRouter} = require('./routes/invitations');
app.use('/users', userRouter);
app.use('/guests', guestsRouter);
app.use('/invitations', invitationsRouter);

app.listen(PORT, () => {
    console.log('Server is running...')
})