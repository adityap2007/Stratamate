import { NextResponse } from 'next/server'

export async function GET() {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
  
  return NextResponse.json({
    maintenanceMode,
    message: maintenanceMode ? 'System is currently under maintenance' : 'System is operational'
  })
} 