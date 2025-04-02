import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    maintenanceMode: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true',
    message: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
      ? 'System is currently under maintenance' 
      : 'System is operational'
  })
} 