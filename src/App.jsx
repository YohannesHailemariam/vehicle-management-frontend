import React from 'react';
import AddVehicleForm from './components/AddVehicleForm';
import VehicleList from './components/VehicleList';

function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Vehicle Management Dashboard</h1>
      <AddVehicleForm />
      <VehicleList />
    </div>
  );
}

export default App;
