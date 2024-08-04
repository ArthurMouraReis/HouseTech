import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThermostatControl = () => {
  const [temperature, setTemperature] = useState(72);

  useEffect(() => {
    // Fetch current temperature
    axios.get('/api/thermostat')
      .then(response => setTemperature(response.data.temperature))
      .catch(error => console.error('Error fetching thermostat data:', error));
  }, []);

  const setTemperatureHandler = (newTemp) => {
    axios.post('/api/thermostat', { temperature: newTemp })
      .then(() => setTemperature(newTemp))
      .catch(error => console.error('Error setting temperature:', error));
  };

  return (
    <div>
      <h2>Thermostat Control</h2>
      <button onClick={() => setTemperatureHandler(temperature - 1)}>-</button>
      <span>{temperature}°F</span>
      <button onClick={() => setTemperatureHandler(temperature + 1)}>+</button>
    </div>
  );
};

export default ThermostatControl;
