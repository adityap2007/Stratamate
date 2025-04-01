'use client';

import { useState } from 'react';

export default function MaintenancePage() {
  const [requests, setRequests] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'low',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
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
        <div className="grid gap-6">
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
                onChange={(e) => setFormData({...formData, priority: e.target.value})}
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
                placeholder="e.g., Unit 101, Lobby"
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
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
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border-l-4 border-blue-500"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{request.title}</h3>
              <span className={`px-2 py-1 rounded text-sm ${
                request.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                request.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                request.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {request.priority}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{request.description}</p>
            <div className="mt-4 text-sm text-gray-500 flex justify-between">
              <span>Location: {request.location}</span>
              <span>Submitted: {request.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 