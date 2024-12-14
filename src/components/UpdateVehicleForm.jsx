import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateVehicle } from '../features/vehicleSlice';
import axios from 'axios';

const UpdateVehicleForm = ({ vehicleId, onClose }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Available');
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/vehicles/${vehicleId}`)
      .then((response) => {
        setName(response.data.name);
        setStatus(response.data.status);
      })
      .catch((error) => console.error(error));
  }, [vehicleId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVehicle = { name, status };
    dispatch(updateVehicle({ vehicleId, updatedVehicle }));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <div>
        <label className="block text-gray-700">Vehicle Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Update Vehicle
      </button>
      <button
        type="button"
        onClick={onClose}
        className="w-full py-2 bg-gray-600 text-white rounded hover:bg-gray-700 mt-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default UpdateVehicleForm;
