const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDatabase = require('./helpers/database/connectDatabase');
const routers = require('./routers');

//Server global variable
dotenv.config({
  path: './config/env/config.env',
});

//Connect Database
connectDatabase();

//App Started
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
app.use('/api', routers);

// Server init
app.listen(PORT, () => {
  console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});
