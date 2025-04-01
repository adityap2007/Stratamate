import './globals.css'
import { Navbar } from './components/nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
