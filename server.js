const path = require('path');
const express = require('express');
const app = express();

const dbPath = path.join(__dirname, 'api/db_v2.json');
const jsonData = require(dbPath);

app.get('/araclar/:vehicleId', (req, res) => {
  const vehicleId = parseInt(req.params.vehicleId);
  const vehicle = jsonData.araclar.find(v => v.vehicleId === vehicleId);

  if (vehicle) {
    res.json(vehicle);
  } else {
    res.status(404).json({ error: 'Vehicle not found' });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});