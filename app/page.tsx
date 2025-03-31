import Image from 'next/image'
import { env } from './lib/env'

export default function Page() {
  return (
    <section>
      <Image 
        src="/ChatGPT Image Apr 1, 2025, 08_47_24 AM.png" 
        alt="Description" 
        width={300} 
        height={300}
        priority
      />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {env.building.name}
      </h1>
      <p className="mb-4">
        {`The purpose of this Strata Management website is to streamline the administration and 
        communication within apartment buildings and residential communities. It provides essential tools for 
        managing committee members, levy payments, maintenance requests, and notices in an efficient, digital format. 
        Through its user-friendly interface, residents can track financial obligations, submit repair requests, and stay informed 
        about important updates. By integrating serverless edge functions, automated workflows, and real-time updates, the website 
        enhances transparency and simplifies property management for both strata committees and residents.`}
      </p>
      {env.maintenanceMode && (
        <div className="p-4 bg-yellow-100 text-yellow-800 rounded-md mb-4">
          ⚠️ Maintenance Mode: Some features may be limited
        </div>
      )}
      <div className="mt-4 text-sm text-gray-600">
        <p>Contact us at: {env.building.contactEmail}</p>
        <p>Address: {env.building.address}</p>
      </div>
    </section>
  )
}
