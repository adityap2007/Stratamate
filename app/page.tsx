import Image from 'next/image'
import Link from 'next/link'
import { env } from './lib/env'

export default function Page() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to {env.building.name}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your Digital Strata Management Solution
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Link href="/building-management" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Building Management</h2>
            <p className="text-gray-600">Track occupancy, manage visitor access, and handle maintenance requests.</p>
          </Link>
          
          <Link href="/committee" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Committee Members</h2>
            <p className="text-gray-600">Connect with your strata committee and stay updated on decisions.</p>
          </Link>
          
          <Link href="/maintenance" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Maintenance</h2>
            <p className="text-gray-600">Submit and track maintenance requests for your property.</p>
          </Link>
          
          <Link href="/notices" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Notices & Updates</h2>
            <p className="text-gray-600">Stay informed about important building announcements and events.</p>
          </Link>
        </section>

        {/* Status Section */}
        {env.maintenanceMode && (
          <div className="p-4 bg-yellow-100 text-yellow-800 rounded-md mb-8">
            ⚠️ Maintenance Mode: Some features may be limited
          </div>
        )}

        {/* Contact Information */}
        <section className="text-center p-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-2">Email: {env.building.contactEmail}</p>
          <p className="text-gray-600">Address: {env.building.address}</p>
        </section>
      </main>
    </div>
  )
}
