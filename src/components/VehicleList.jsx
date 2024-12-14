import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehicles, updateVehicle, deleteVehicle } from '../features/vehicleSlice';
import UpdateVehicleForm from './UpdateVehicleForm';

const VehicleList = () => {
  const dispatch = useDispatch();
  const { vehicles, status, error } = useSelector((state) => state.vehicles);

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  const handleUpdate = (vehicleId) => {
    setSelectedVehicle(vehicleId); // Open the update form
  };

  const closeUpdateForm = () => {
    setSelectedVehicle(null); // Close the update form
  };

  const handleDelete = (vehicleId) => {
    dispatch(deleteVehicle(vehicleId));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="overflow-x-auto">
      {selectedVehicle && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
            <UpdateVehicleForm vehicleId={selectedVehicle} onClose={closeUpdateForm} />
          </div>
        </div>
      )}

      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-4 py-2 border">Vehicle Name</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id}>
              <td className="px-4 py-2 border">{vehicle.name}</td>
              <td className="px-4 py-2 border">{vehicle.status}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleUpdate(vehicle._id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(vehicle._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
