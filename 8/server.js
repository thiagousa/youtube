// server.js
const express = require('express');
const client = require('prom-client');

const app = express();
const port = 3000;

// Create a new counter metric
const fakeCounter = new client.Counter({
  name: 'fake_metrics_counter',
  help: 'Fake metrics counter example',
});

// Increment the counter every time the /metrics endpoint is hit
app.get('/metrics', (req, res) => {
    fakeCounter.inc();
    res.set('Content-Type', client.register.contentType);
    client.register.metrics().then(metrics => {
      res.end(metrics);
    });
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
