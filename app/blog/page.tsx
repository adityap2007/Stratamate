import { env } from '../lib/env'

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Committee Members
      </h1>
      
      <div className="grid gap-8">
        {/* Important Figures */}
        <div className="space-y-6">
          <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">Key Management Figures</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Strata Manager */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">Sarah Thompson</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Strata Manager</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                With over 15 years of experience in strata management, Sarah oversees all administrative aspects of {env.building.name}, including financial management, maintenance coordination, and resident communications.
              </p>
            </div>

            {/* Building Manager */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">Michael Chen</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Building Manager</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Michael is responsible for the day-to-day operations of {env.building.name}, including maintenance, security, and ensuring all building systems are functioning properly.
              </p>
            </div>

            {/* Treasurer */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">David Wilson</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Treasurer</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                David manages the building's finances, including levy collection, budget planning, and financial reporting to ensure {env.building.name}'s financial health.
              </p>
            </div>
          </div>
        </div>

        {/* Residents */}
        <div className="space-y-6">
          <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">Resident Representatives</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Chairperson */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">Emma Rodriguez</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Committee Chairperson</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Emma represents the residents' interests and chairs committee meetings. She has been a resident for 8 years and is passionate about community engagement.
              </p>
            </div>

            {/* Secretary */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">James Park</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Secretary</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                James handles all committee documentation and communications. He ensures all residents are well-informed about building matters.
              </p>
            </div>

            {/* Maintenance Representative */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">Lisa Wong</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Maintenance Representative</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Lisa works closely with the building manager to address maintenance concerns and improvements. She has a background in property maintenance.
              </p>
            </div>

            {/* Community Representative */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">Robert Singh</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Community Representative</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Robert focuses on fostering community spirit and organizing social events. He ensures residents' voices are heard in community matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
