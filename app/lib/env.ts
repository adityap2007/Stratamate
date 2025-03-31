export const env = {
  // API
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',

  // Database
  databaseUrl: process.env.DATABASE_URL,

  // Authentication
  authEnabled: process.env.NEXT_PUBLIC_AUTH_ENABLED === 'true',
  authSecret: process.env.AUTH_SECRET,

  // Email
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
  },

  // Feature Flags
  maintenanceMode: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true',
  enableNotifications: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS === 'true',

  // Building Information
  building: {
    name: process.env.NEXT_PUBLIC_BUILDING_NAME || 'Strata Mate',
    address: process.env.NEXT_PUBLIC_BUILDING_ADDRESS || '123 Example Street',
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@stratamate.com',
  },
} as const;

// Validate required environment variables
const requiredEnvVars = [
  'DATABASE_URL',
  'AUTH_SECRET',
  'SMTP_HOST',
  'SMTP_USER',
  'SMTP_PASSWORD',
] as const;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
} 