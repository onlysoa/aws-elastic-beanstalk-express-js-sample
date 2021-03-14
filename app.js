const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => res.send('Hello World. welcome to CICD Pipleline on AWS');

app.listen(port);
console.log(`App running on http://localhost:${port}`);
