const express = require("express");
const cors = require("cors");
const dbConnect = require("./utils/mongoConnect");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const URL_BASE = process.env.URL_BASE;

const app = express();

const corsOptions = {
  "origin": [
    /^http:\/\/localhost(:\d+)?$/,    // Matches localhost with any port
    /^http:\/\/127\.0\.0\.1(:\d+)?$/  // Matches loopback IP with any port
  ],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,         // If true cors call next to pass to following middlewares instead replying itself, is only usefull to implement more logic that the cors module correct response
  "optionsSuccessStatus": 200         // Essential for older browser engines and preflight stability
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded());

//dbConnect().catch((error) => { console.log(error) });

app.use(`${URL_BASE}/services`, require("./routes/services.route"));
app.use(`${URL_BASE}/auth`, require("./routes/auth.route"));

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
})
