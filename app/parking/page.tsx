'use client';

import { useState } from 'react';

interface ParkingSpot {
  id: number;
  number: string;
  status: 'occupied' | 'available' | 'reserved';
  occupant?: string;
  vehicle?: string;
}

interface VisitorParking {
  id: number;
  visitorName: string;
  unit: string;
  vehicle: string;
  startTime: string;
  duration: number;
}

export default function ParkingPage() {
  const [parkingSpots, setParkingSpots] = useState<ParkingSpot[]>([
    { id: 1, number: 'A1', status: 'occupied', occupant: 'John Doe', vehicle: 'ABC123' },
    { id: 2, number: 'A2', status: 'available' },
    { id: 3, number: 'A3', status: 'reserved', occupant: 'Jane Smith' },
    { id: 4, number: 'B1', status: 'available' },
    { id: 5, number: 'B2', status: 'occupied', occupant: 'Mike Johnson', vehicle: 'XYZ789' },
  ]);

  const [visitorParking, setVisitorParking] = useState<VisitorParking[]>([]);
  const [showVisitorForm, setShowVisitorForm] = useState(false);
  const [newVisitor, setNewVisitor] = useState({
    visitorName: '',
    unit: '',
    vehicle: '',
    startTime: '',
    duration: 2
  });

  const handleVisitorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const visitor = {
      id: Date.now(),
      ...newVisitor
    };
    setVisitorParking([...visitorParking, visitor]);
    setNewVisitor({
      visitorName: '',
      unit: '',
      vehicle: '',
      startTime: '',
      duration: 2
    });
    setShowVisitorForm(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'occupied':
        return 'bg-red-100 text-red-800';
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'reserved':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Parking Management</h1>

      {/* Resident Parking Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Resident Parking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {parkingSpots.map((spot) => (
            <div
              key={spot.id}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-lg font-medium">Spot {spot.number}</span>
                <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(spot.status)}`}>
                  {spot.status}
                </span>
              </div>
              {spot.occupant && (
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p>Occupant: {spot.occupant}</p>
                  {spot.vehicle && <p>Vehicle: {spot.vehicle}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Visitor Parking Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Visitor Parking</h2>
          <button
            onClick={() => setShowVisitorForm(!showVisitorForm)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {showVisitorForm ? 'Cancel' : 'Register Visitor'}
          </button>
        </div>

        {showVisitorForm && (
          <form onSubmit={handleVisitorSubmit} className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Visitor Name</label>
                <input
                  type="text"
                  value={newVisitor.visitorName}
                  onChange={(e) => setNewVisitor({...newVisitor, visitorName: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Unit Number</label>
                  <input
                    type="text"
                    value={newVisitor.unit}
                    onChange={(e) => setNewVisitor({...newVisitor, unit: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle</label>
                  <input
                    type="text"
                    value={newVisitor.vehicle}
                    onChange={(e) => setNewVisitor({...newVisitor, vehicle: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Start Time</label>
                  <input
                    type="time"
                    value={newVisitor.startTime}
                    onChange={(e) => setNewVisitor({...newVisitor, startTime: e.target.value})}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Duration (hours)</label>
                  <input
                    type="number"
                    value={newVisitor.duration}
                    onChange={(e) => setNewVisitor({...newVisitor, duration: parseInt(e.target.value)})}
                    className="w-full p-2 border rounded"
                    min="1"
                    max="24"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Register
              </button>
            </div>
          </form>
        )}

        <div className="grid gap-4">
          {visitorParking.map((visitor) => (
            <div
              key={visitor.id}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">{visitor.visitorName}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Unit: {visitor.unit}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Vehicle: {visitor.vehicle}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Time: {visitor.startTime} ({visitor.duration} hours)
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visitorParking.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No visitor parking registrations
          </div>
        )}
      </div>
    </div>
  );
} 