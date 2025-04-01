import EmergencyNotification from './components/EmergencyNotification'
import OccupancyTracker from './components/OccupancyTracker'
import VisitorAccess from './components/VisitorAccess'

export default function BuildingManagementPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Building Management Dashboard</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Emergency Notifications Section */}
        <div className="col-span-full lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Emergency Notifications</h2>
            <EmergencyNotification />
          </div>
        </div>

        {/* Occupancy Tracking Section */}
        <div className="col-span-full lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Occupancy Tracking</h2>
            <OccupancyTracker />
          </div>
        </div>

        {/* Visitor Access Section */}
        <div className="col-span-full lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Visitor Access</h2>
            <VisitorAccess />
          </div>
        </div>
      </div>
    </div>
  )
} 