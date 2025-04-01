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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Community Events</h1>
      <p className="text-gray-600">
        Discover and participate in upcoming community events and activities.
      </p>
      <div className="grid gap-4">
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
          <p className="text-gray-600">Browse and register for upcoming community events.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Event Calendar</h2>
          <p className="text-gray-600">View the full calendar of community activities.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Event Proposals</h2>
          <p className="text-gray-600">Submit proposals for new community events.</p>
        </div>
      </div>
    </div>
  );
} 