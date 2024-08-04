import React from 'react';
import LightingControl from './LightingControl';
import ThermostatControl from './ThermostatControl';
import SecurityControl from './SecurityControl';

const Dashboard = () => {
  return (
    <div>
      <h1>SmartHome Control</h1>
      <LightingControl />
      <ThermostatControl />
      <SecurityControl />
    </div>
  );
};

export default Dashboard;
