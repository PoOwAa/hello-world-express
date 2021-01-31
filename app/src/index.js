const express = require('express');
const promBundle = require('express-prom-bundle');
const app = express();

const PORT = 3000;

app.use(
  promBundle({
    includeMethod: true,
    includeStatusCode: true,
    includePath: true,
    normalizePath: [['^/user/[0-9]*', '/user/#id']],
    promClient: {
      collectDefaultMetrics: {},
    },
    formatStatusCode: (res) => {
      const status = res.statusCode;
      if (status >= 200 && status < 300) {
        return '2XX';
      }

      if (status >= 300 && status < 400) {
        return '3XX';
      }

      if (status >= 400 && status < 500) {
        return '4XX';
      }

      return '5XX';
    },
  })
);

app.get('/', function (req, res) {
  res.send('hello world from example app!');
});

app.get('/login', function (req, res) {
  res.json({
    status: 200,
    message: 'Succesful login!',
  });
});

app.get('/user/:id', function (req, res) {
  const userId = req.params.id;
  res.json({
    status: 200,
    message: `Hello user [${userId}]`,
  });
});

app.get('/slow/:time', function (req, res) {
  const { time } = req.params;
  setTimeout(() => {
    res.json({
      status: 200,
      message: `I am a very slow endpoint`,
    });
  }, time);
});

app.get('/error', function (req, res) {
  res.status(500).json({
    status: 500,
    message: `I'm an error!`,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
