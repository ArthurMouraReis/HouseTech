import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SecurityControl = () => {
  const [status, setStatus] = useState('unknown');

  useEffect(() => {
    // Fetch security system status
    axios.get('/api/security')
      .then(response => setStatus(response.data.status))
      .catch(error => console.error('Error fetching security status:', error));
  }, []);

  const toggleSecurity = () => {
    axios.post('/api/security/toggle')
      .then(response => setStatus(response.data.status))
      .catch(error => console.error('Error toggling security system:', error));
  };

  return (
    <div>
      <h2>Security Control</h2>
      <span>System is {status}</span>
      <button onClick={toggleSecurity}>
        {status === 'armed' ? 'Disarm' : 'Arm'}
      </button>
    </div>
  );
};

export default SecurityControl;
