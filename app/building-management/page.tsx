'use client';

import { useState } from 'react';

export default function BuildingManagementPage() {
  // Emergency Notification State
  const [emergencyType, setEmergencyType] = useState('Fire');
  const [buildingSection, setBuildingSection] = useState('');
  const [emergencyMessage, setEmergencyMessage] = useState('');

  // Occupancy Tracking State
  const [selectedArea, setSelectedArea] = useState('Gym');
  const [currentOccupancy, setCurrentOccupancy] = useState(0);
  const capacity = {
    'Gym': 50,
    'Pool': 30,
    'Common Room': 40,
    'Rooftop Garden': 25
  };

  // Visitor Access State
  const [visitorId, setVisitorId] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [purpose, setPurpose] = useState('Guest');
  const [duration, setDuration] = useState(4);

  const handleEmergencyAlert = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle emergency alert logic here
    alert(`Emergency Alert Sent: ${emergencyType} in ${buildingSection}\nMessage: ${emergencyMessage}`);
  };

  const handleOccupancyChange = (action: 'enter' | 'exit') => {
    if (action === 'enter' && currentOccupancy < capacity[selectedArea as keyof typeof capacity]) {
      setCurrentOccupancy(prev => prev + 1);
    } else if (action === 'exit' && currentOccupancy > 0) {
      setCurrentOccupancy(prev => prev - 1);
    }
  };

  const handleVisitorAccess = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle visitor access logic here
    alert(`Access Generated for Visitor: ${visitorId}\nUnit: ${unitNumber}\nDuration: ${duration} hours`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Building Management Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Emergency Notifications Section */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-6">Emergency Notifications</h2>
          <form onSubmit={handleEmergencyAlert} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Emergency Type</label>
              <select
                value={emergencyType}
                onChange={(e) => setEmergencyType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="Fire">Fire</option>
                <option value="Medical">Medical</option>
                <option value="Security">Security</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Building Section</label>
              <input
                type="text"
                value={buildingSection}
                onChange={(e) => setBuildingSection(e.target.value)}
                placeholder="e.g., Block A"
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={emergencyMessage}
                onChange={(e) => setEmergencyMessage(e.target.value)}
                placeholder="Describe the emergency..."
                className="w-full p-2 border rounded"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
            >
              Send Emergency Alert
            </button>
          </form>
        </div>

        {/* Occupancy Tracking Section */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-6">Occupancy Tracking</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select Area</label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="Gym">Gym</option>
                <option value="Pool">Pool</option>
                <option value="Common Room">Common Room</option>
                <option value="Rooftop Garden">Rooftop Garden</option>
              </select>
            </div>

            <div className="text-center py-4">
              <p className="text-2xl font-bold">{currentOccupancy}</p>
              <p className="text-sm text-gray-500">Current Occupancy</p>
              <p className="text-sm text-gray-500">
                {((currentOccupancy / capacity[selectedArea as keyof typeof capacity]) * 100).toFixed(0)}% Capacity
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleOccupancyChange('enter')}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
              >
                Enter
              </button>
              <button
                onClick={() => handleOccupancyChange('exit')}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Exit
              </button>
            </div>
          </div>
        </div>

        {/* Visitor Access Section */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-6">Visitor Access</h2>
          <form onSubmit={handleVisitorAccess} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Visitor ID</label>
              <input
                type="text"
                value={visitorId}
                onChange={(e) => setVisitorId(e.target.value)}
                placeholder="Enter visitor ID"
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Unit Number</label>
              <input
                type="text"
                value={unitNumber}
                onChange={(e) => setUnitNumber(e.target.value)}
                placeholder="e.g., 12/03"
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Purpose</label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="Guest">Guest</option>
                <option value="Delivery">Delivery</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Duration (hours)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                min="1"
                max="24"
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Generate Access
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © 2024 Strata Mate. All rights reserved.
      </div>
    </div>
  );
} 