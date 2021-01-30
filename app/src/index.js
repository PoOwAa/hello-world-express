const express = require('express')
const promBundle = require("express-prom-bundle");
const app = express()

const PORT = 3000;

app.use(promBundle({
    includeMethod: true,
    includeStatusCode: true,
    includePath: true,
    normalizePath: [
        ['^/user/[0-9]*', '/user/#id'],
    ]
}));

app.get('/', function (req, res) {
  res.send('hello world from example app!')
})

app.get('/login', function (req, res) {
  res.json({
      status: 200,
      message: 'Succesful login!',
  });
})

app.get('/user/:id', function (req, res) {
    const userId = req.params.id;
    res.json({
        status: 200,
        message: `Hello user [${userId}]`,
    });
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})