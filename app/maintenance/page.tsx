'use client';

import { useState } from 'react';

interface MaintenanceRequest {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  location: string;
  status: 'pending' | 'in-progress' | 'completed';
  date: string;
}

export default function MaintenancePage() {
  const [requests, setRequests] = useState<MaintenanceRequest[]>([]);
  const [formData, setFormData] = useState<Omit<MaintenanceRequest, 'id' | 'status' | 'date'>>({
    title: '',
    description: '',
    priority: 'low',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRequest: MaintenanceRequest = {
      ...formData,
      id: Date.now(),
      status: 'pending',
      date: new Date().toLocaleDateString()
    };
    setRequests([...requests, newRequest]);
    setFormData({ title: '', description: '', priority: 'low', location: '' });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Maintenance Requests</h1>

      {/* Request Form */}
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">Issue Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full p-2 border rounded"
            rows={4}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Priority</label>
            <select
              value={formData.priority}
              onChange={(e) => setFormData({...formData, priority: e.target.value as MaintenanceRequest['priority']})}
              className="w-full p-2 border rounded"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Submit Request
          </button>
        </div>
      </form>

      {/* Requests List */}
      <div className="space-y-4">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{request.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{request.description}</p>
                <p className="text-sm text-gray-500">Location: {request.location}</p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  request.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                  request.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                  request.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {request.priority}
                </span>
                <span className="text-sm text-gray-500">{request.date}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className={`px-3 py-1 rounded-full text-sm ${
                request.status === 'pending' ? 'bg-blue-100 text-blue-800' :
                request.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {request.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {requests.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No maintenance requests yet
        </div>
      )}
    </div>
  );
} 