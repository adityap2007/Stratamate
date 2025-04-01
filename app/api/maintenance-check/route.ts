import { NextResponse } from 'next/server'
import { env } from '@/lib/env'

export async function GET() {
  return NextResponse.json({
    maintenanceMode: env.NEXT_PUBLIC_MAINTENANCE_MODE,
    message: env.NEXT_PUBLIC_MAINTENANCE_MODE 
      ? 'System is currently under maintenance' 
      : 'System is operational'
  })
} 