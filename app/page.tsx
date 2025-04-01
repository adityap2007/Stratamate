import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col items-center mb-12">
        <Image
          src="/stratamate-logo.png"
          alt="Stratamate Logo"
          width={200}
          height={200}
          priority
          className="mb-6"
        />
        <h1 className="text-3xl font-bold">Welcome to Stratamate</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <ul className="space-y-3">
            <li>
              <a href="/maintenance" className="text-blue-600 hover:underline">Submit Maintenance Request</a>
            </li>
            <li>
              <a href="/documents" className="text-blue-600 hover:underline">View Important Documents</a>
            </li>
            <li>
              <a href="/announcements" className="text-blue-600 hover:underline">Check Latest Announcements</a>
            </li>
            <li>
              <a href="/events" className="text-blue-600 hover:underline">Upcoming Community Events</a>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Recent Updates</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">March 30, 2024</p>
              <p>Building maintenance scheduled for next weekend</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">March 28, 2024</p>
              <p>New recycling guidelines posted</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">March 25, 2024</p>
              <p>Community BBQ event announced</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Building Information</h2>
          <div className="space-y-2">
            <p><strong>Address:</strong> 123 Strata Street</p>
            <p><strong>Management Contact:</strong> (555) 123-4567</p>
            <p><strong>Emergency:</strong> (555) 987-6543</p>
            <p><strong>Office Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Important Links</h2>
          <ul className="space-y-3">
            <li>
              <a href="/building-management" className="text-blue-600 hover:underline">Building Management Portal</a>
            </li>
            <li>
              <a href="/parking" className="text-blue-600 hover:underline">Parking Management</a>
            </li>
            <li>
              <a href="/documents" className="text-blue-600 hover:underline">Document Repository</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
