'use client'

// src/app/dashboard/page.tsx
// import { getServerSession } from 'next-auth'
// import { redirect } from 'next/navigation'
import { Package2, Activity, BarChart3 } from 'lucide-react'

export default async function DashboardPage() {
  // const session = await getServerSession()
  
  // if (!session) {
  //   redirect('/login')
  // }

  return (
    <div className="container mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your listings and view your activity</p>
      </header>

      {/* Stats Overview */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Total Sales', value: '0', icon: Package2 },
            { label: 'Active Listings', value: '0', icon: Activity },
            { label: 'Views This Month', value: '0', icon: BarChart3 }
          ].map((stat) => (
            <div key={stat.label} 
                 className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 font-medium">{stat.label}</p>
                <stat.icon className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Listings */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Active Listings</h2>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Add New Listing
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample empty state */}
          <div className="col-span-full p-8 text-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <Package2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No active listings</h3>
            <p className="text-gray-600 mb-4">Start selling by creating your first listing</p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Create Listing
            </button>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          {/* Sample empty state */}
          <div className="p-6 text-center">
            <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recent activity</h3>
            <p className="text-gray-600">Your recent activity will appear here</p>
          </div>
        </div>
      </section>

      {/* Performance Insights */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Most Viewed Items</h3>
            <div className="text-center py-8">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No data available yet</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Overview</h3>
            <div className="text-center py-8">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No sales data available yet</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
