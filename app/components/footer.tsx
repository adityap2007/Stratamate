export default function Footer() {
  return (
    <footer className="mt-8 flex flex-col items-center justify-center border-t border-gray-200 py-8 dark:border-gray-800">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Strata Mate. All rights reserved.
      </p>
    </footer>
  )
}
