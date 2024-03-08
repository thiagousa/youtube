// 1-​ Ensure configuration is distinct from code. process.env.PORT 
require('dotenv').config();
const port = 3000;

const express = require('express');
const app = express();

const router = express.Router(); // Create a new express router

const { Gauge } = require('prom-client');

function generatePassword(length = 10, includeNumbers = true, includeSymbols = true) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                  (includeNumbers ? '0123456789' : '') + 
                  (includeSymbols ? '!@#$%^&*()_+-=[]{}|;:.<>/?' : ''); // Corrected line
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });
// 1-​ Ensure configuration is distinct from code. process.env.HEALTH
// 2- Health, metrics, and readiness checks:
app.get(process.env.HEALTH, (req, res) => {
  // Example health check logic
  const isAppReady = checkAppReadiness();

  if (isAppReady) {
    res.json({ status: 'UP', message: 'App is ready to receive requests.' });
  } else {
    // Respond with a 503 Service Unavailable status code to indicate the app is not ready
    res.status(503).json({ status: 'DOWN', message: 'App is not ready to receive requests.' });
  }
});

function checkAppReadiness() {
  // Implement your readiness check logic here
  // This is a simple example. You should replace it with actual checks, such as:
  // - Database connectivity
  // - Availability of external services your app depends on
  // - Disk space, memory usage, or other resource checks
  // - Etc.

  // For demonstration purposes, let's assume the app is always ready:
  return true;

  // In a real scenario, you might check a global variable that gets updated based on various app conditions
  // return global.appReady;
}

// 1-​ Ensure configuration is distinct from code.
// 2- Health, metrics, and readiness checks:
app.get(process.env.LIVE, (req, res) => {
  res.send('OK');
  // 3-  Direct logs to standard output (stdout) and error streams (stderr):
  console.log(`LIVE`);
});
// 1-​ Ensure configuration is distinct from code.
// 2- Health, metrics, and readiness checks:
app.get(process.env.METRICS, async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

router.use(express.static('public'));

router.get('/generate-password', (req, res) => {
  const length = parseInt(req.query.length) || 10;
  const includeNumbers = req.query.numbers !== 'false';
  const includeSymbols = req.query.symbols !== 'false';
  const password = generatePassword(length, includeNumbers, includeSymbols);
  // 3- Direct logs to standard output (stdout) and error streams (stderr):
  console.log(`Generating password with length ${length}, numbers: ${includeNumbers}, symbols: ${includeSymbols}`);
  res.json({ password });
});

app.use('/app', router);

const server = app.listen(port, () => {
 // 3-  Direct logs to standard output (stdout) and error streams (stderr):
  console.log(`Password generator app listening at http://localhost:${port}`);
});




// Define a Prometheus Gauge for fake latency metrics
const latencyGauge = new Gauge({
  name: 'app_request_latency_seconds',
  help: 'Simulated latency of requests in seconds',
  labelNames: ['route'],
});


app.use((err, req, res, next) => {
  // 3-  Direct logs to standard output (stdout) and error streams (stderr):
  console.error(`Error processing request ${req.method} ${req.url}: ${err.message}`);
  res.status(500).send('Internal Server Error');
});

// Function to simulate latency updates
function simulateLatencyUpdates() {
  // 1-​ Ensure configuration is distinct from code.
  const routes = [process.env.LIVE, process.env.HEALTH, process.env.METRICS];
  setInterval(() => {
    routes.forEach(route => {
      const latency = Math.random() * 0.5 + 0.01;
      latencyGauge.labels(route).set(latency);
    });
  }, 5000);
}

simulateLatencyUpdates();


// Function to handle graceful shutdown
// 4- ENSURE GRACEFUL SHUTDOWNS
function gracefulShutdown(signal) {
  // 3-  Direct logs to standard output (stdout) and error streams (stderr):
  console.log(`Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    // 3-  Direct logs to standard output (stdout) and error streams (stderr):
    console.log('Closed out remaining connections.');
    process.exit(0);
  });

  setTimeout(() => {
    // 3-  Direct logs to standard output (stdout) and error streams (stderr):
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  // 1-​ Ensure configuration is distinct from code.  
  }, process.env.GRACEFULL); // Forcefully shut down after 10 seconds
}



process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));


