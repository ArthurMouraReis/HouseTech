import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LightingControl = () => {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    // Fetch lighting data from backend
    axios.get('/api/lights')
      .then(response => setLights(response.data))
      .catch(error => console.error('Error fetching lights:', error));
  }, []);

  const toggleLight = (id) => {
    axios.post(`/api/lights/${id}/toggle`)
      .then(response => {
        const updatedLights = lights.map(light =>
          light.id === id ? { ...light, status: response.data.status } : light
        );
        setLights(updatedLights);
      })
      .catch(error => console.error('Error toggling light:', error));
  };

  return (
    <div>
      <h2>Lighting Control</h2>
      {lights.map(light => (
        <div key={light.id}>
          <span>{light.name}</span>
          <button onClick={() => toggleLight(light.id)}>
            {light.status === 'on' ? 'Turn Off' : 'Turn On'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LightingControl;
