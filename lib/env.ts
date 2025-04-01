// Environment variables typed and validated at runtime
export const env = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  NEXT_PUBLIC_BUILDING_NAME: process.env.NEXT_PUBLIC_BUILDING_NAME || 'Strata Mate',
  NEXT_PUBLIC_BUILDING_ADDRESS: process.env.NEXT_PUBLIC_BUILDING_ADDRESS || '123 Example Street',
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@stratamate.com',
  NEXT_PUBLIC_MAINTENANCE_MODE: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true',
  NEXT_PUBLIC_ENABLE_NOTIFICATIONS: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS !== 'false',
} 