const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

  

const navPort = 3001;
app.listen(navPort, () => {

  console.log(`Nav server awaits instructions on ${navPort}`);
});