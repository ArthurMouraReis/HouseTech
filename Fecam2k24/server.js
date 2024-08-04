const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock data
let lights = [{ id: 1, name: 'Living Room', status: 'off' }];
let thermostat = { temperature: 72 };
let security = { status: 'disarmed' };

// Routes
app.get('/api/lights', (req, res) => {
  res.json(lights);
});

app.post('/api/lights/:id/toggle', (req, res) => {
  const light = lights.find(l => l.id === parseInt(req.params.id));
  if (light) {
    light.status = light.status === 'on' ? 'off' : 'on';
    res.json({ status: light.status });
  } else {
    res.status(404).send('Light not found');
  }
});

app.get('/api/thermostat', (req, res) => {
  res.json(thermostat);
});

app.post('/api/thermostat', (req, res) => {
  thermostat.temperature = req.body.temperature;
  res.sendStatus(200);
});

app.get('/api/security', (req, res) => {
  res.json(security);
});

app.post('/api/security/toggle', (req, res) => {
  security.status = security.status === 'armed' ? 'disarmed' : 'armed';
  res.json({ status: security.status });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
