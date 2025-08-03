const express = require('express');
const cors = require('cors');
const app = express();
const routers = require('./routers/index')
require('dotenv').config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(routers)


app.listen(5000, () => console.log('Server running on port 5000'));