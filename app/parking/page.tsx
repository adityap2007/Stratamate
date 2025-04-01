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
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Resident Parking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {parkingSpots.map((spot) => (
            <div
              key={spot.id}
              className="border rounded-lg p-4 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">Spot {spot.number}</span>
                <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(spot.status)}`}>
                  {spot.status}
                </span>
              </div>
              {spot.occupant && (
                <div className="text-sm text-gray-600">
                  <p>Occupant: {spot.occupant}</p>
                  {spot.vehicle && <p>Vehicle: {spot.vehicle}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Visitor Parking Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Visitor Parking</h2>
          <button
            onClick={() => setShowVisitorForm(!showVisitorForm)}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            {showVisitorForm ? 'Cancel' : 'Register Visitor'}
          </button>
        </div>

        {showVisitorForm && (
          <form onSubmit={handleVisitorSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
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
                <label className="block text-sm font-medium mb-2">Vehicle Registration</label>
                <input
                  type="text"
                  value={newVisitor.vehicle}
                  onChange={(e) => setNewVisitor({...newVisitor, vehicle: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
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
                    min="1"
                    max="24"
                    value={newVisitor.duration}
                    onChange={(e) => setNewVisitor({...newVisitor, duration: parseInt(e.target.value)})}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
              >
                Register Visitor
              </button>
            </div>
          </form>
        )}

        <div className="grid gap-4">
          {visitorParking.map((visitor) => (
            <div
              key={visitor.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border-l-4 border-blue-500"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <span className="font-medium">Visitor:</span> {visitor.visitorName}
                </div>
                <div>
                  <span className="font-medium">Unit:</span> {visitor.unit}
                </div>
                <div>
                  <span className="font-medium">Vehicle:</span> {visitor.vehicle}
                </div>
                <div>
                  <span className="font-medium">Start Time:</span> {visitor.startTime}
                </div>
                <div>
                  <span className="font-medium">Duration:</span> {visitor.duration} hours
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 