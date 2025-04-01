import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="font-bold text-2xl">Strata Mate</Link>
      <div className="flex gap-4">
        <Link href="/building-management" className="hover:text-gray-600">Building</Link>
        <Link href="/maintenance" className="hover:text-gray-600">Maintenance</Link>
        <Link href="/committee" className="hover:text-gray-600">Committee</Link>
        <Link href="/notices" className="hover:text-gray-600">Notices</Link>
      </div>
    </nav>
  )
}
