const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routers/routers')
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api', routes)

// app.use('/api/users', require('./routes/users'));
// app.use('/api/projects', require('./routes/projects'));
// app.use('/api/skills', require('./routes/skills'));
// app.use('/api/contact', require('./routes/contact'));

app.listen(5000, () => console.log('Server running on port 5000'));
