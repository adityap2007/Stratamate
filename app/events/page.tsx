'use client';

import { useState } from 'react';

export default function EventsPage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Community BBQ',
      date: '2024-04-15',
      time: '12:00',
      location: 'Rooftop Garden',
      description: 'Join us for our monthly community BBQ!',
      attendees: 12
    },
    {
      id: 2,
      title: 'Residents Meeting',
      date: '2024-04-20',
      time: '18:30',
      location: 'Common Room',
      description: 'Monthly residents meeting to discuss building matters.',
      attendees: 25
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      ...newEvent,
      id: Date.now(),
      attendees: 0
    };
    setEvents([...events, event]);
    setNewEvent({ title: '', date: '', time: '', location: '', description: '' });
    setShowForm(false);
  };

  const handleAttend = (eventId) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, attendees: event.attendees + 1 }
        : event
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Community Events</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
        >
          {showForm ? 'Cancel' : 'Add Event'}
        </button>
      </div>

      {/* New Event Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Event Title</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Time</label>
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                value={newEvent.location}
                onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                className="w-full p-2 border rounded"
                rows={3}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Create Event
            </button>
          </div>
        </form>
      )}

      {/* Events List */}
      <div className="grid gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-green-500"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{event.description}</p>
              </div>
              <button
                onClick={() => handleAttend(event.id)}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors"
              >
                Attend ({event.attendees})
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-500 grid grid-cols-2 gap-4">
              <div>
                <span className="font-medium">Date:</span> {new Date(event.date).toLocaleDateString()}
              </div>
              <div>
                <span className="font-medium">Time:</span> {event.time}
              </div>
              <div>
                <span className="font-medium">Location:</span> {event.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 