'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': 'Home',
  '/building-management': 'Building Management',
  '/maintenance': 'Maintenance',
  '/parking': 'Parking',
  '/documents': 'Documents',
  '/announcements': 'Announcements',
  '/events': 'Events'
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col items-center mb-8 border-b pb-4">
      <div className="w-full flex justify-center py-4">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="/stratamate-logo.png"
            alt="Stratamate Logo"
            width={120}
            height={120}
            priority
            className="mb-2"
          />
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center space-x-4 px-4">
          {Object.entries(navItems).map(([path, label]) => {
            const isActive = pathname === path
            return (
              <Link
                key={path}
                href={path}
                className={`whitespace-nowrap px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-gray-100 dark:bg-gray-800'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
