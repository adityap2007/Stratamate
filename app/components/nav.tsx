import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/building-management': {
    name: 'Building Management',
  },
  '/maintenance': {
    name: 'Maintenance',
  },
  '/parking': {
    name: 'Parking',
  },
  '/documents': {
    name: 'Documents',
  },
  '/announcements': {
    name: 'Announcements',
  },
  '/events': {
    name: 'Events',
  }
}

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="font-bold text-2xl">
        Strata Mate
      </Link>
      <div className="flex flex-wrap gap-4">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="hover:text-gray-600 transition-colors"
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
