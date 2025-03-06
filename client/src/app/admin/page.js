"use client";

import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const MetaverseDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* SIDEBAR */}
      <aside className="w-64 flex-shrink-0 bg-gray-800 border-r border-gray-700">
        {/* Logo / Brand */}
        <div className="px-6 py-4 text-2xl font-bold tracking-wide">
          <span className="text-blue-400">MetaMart</span>
        </div>

        {/* Navigation Items */}
        <nav className="mt-6">
          <ul>
            <li className="px-6 py-3 flex items-center hover:bg-gray-700 transition">
              <span className="mr-2">📊</span>
              <span>Dashboard</span>
            </li>
            <li className="px-6 py-3 flex items-center hover:bg-gray-700 transition">
              <span className="mr-2">🛒</span>
              <span>Inventory</span>
            </li>
            <li className="px-6 py-3 flex items-center justify-between hover:bg-gray-700 transition">
              <div className="flex items-center">
                <span className="mr-2">⚡</span>
                <span>Analytics</span>
              </div>
              <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">16</span>
            </li>
            <li className="px-6 py-3 flex items-center justify-between hover:bg-gray-700 transition">
              <div className="flex items-center">
                <span className="mr-2">💬</span>
                <span>Messages</span>
              </div>
              <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">3</span>
            </li>
            <li className="px-6 py-3 flex items-center hover:bg-gray-700 transition">
              <span className="mr-2">👥</span>
              <span>Team</span>
            </li>
            <li className="px-6 py-3 flex items-center hover:bg-gray-700 transition">
              <span className="mr-2">📅</span>
              <span>Calendar</span>
            </li>
            <li className="px-6 py-3 flex items-center hover:bg-gray-700 transition">
              <span className="mr-2">⚙️</span>
              <span>Settings</span>
            </li>
            <li className="px-6 py-3 flex items-center justify-between hover:bg-gray-700 transition">
              <div className="flex items-center">
                <span className="mr-2">🔔</span>
                <span>New Updates</span>
              </div>
              <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">1</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-grow flex flex-col p-6">
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search for VR headsets, AR glasses..."
              className="w-full px-10 py-2 bg-gray-800 border border-gray-700 rounded-full placeholder-gray-400 focus:outline-none"
            />
            <FiSearch className="absolute top-2 left-3 text-gray-400" />
          </div>
          <div className="flex items-center space-x-6">
            <FiBell className="text-xl cursor-pointer" />
            <FaRegUserCircle className="text-2xl cursor-pointer" />
          </div>
        </div>

        {/* PROJECT SUMMARY (Renamed to "Store Overview") */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold">Store Overview</h2>
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm">
              + Add Product
            </button>
          </div>
          <p className="text-gray-400 mb-4">
            Manage all your AR/VR products and accessories in one place.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-gradient-to-tr from-orange-500 to-orange-400 rounded-lg p-6 shadow">
              <div className="text-4xl font-bold mb-2">40</div>
              <div className="text-white font-medium">Upcoming Shipments</div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-tr from-purple-500 to-purple-400 rounded-lg p-6 shadow">
              <div className="text-4xl font-bold mb-2">87</div>
              <div className="text-white font-medium">In-Stock VR Headsets</div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-tr from-blue-500 to-blue-400 rounded-lg p-6 shadow">
              <div className="text-4xl font-bold mb-2">102</div>
              <div className="text-white font-medium">Orders Completed</div>
            </div>
          </div>
        </div>

        {/* TIMELINE (Simplified Example) */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Restock Timeline</h3>
          <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
            <span>July 20</span>
            <span>Aug 4</span>
            <span>Aug 15</span>
            <span>Aug 29</span>
            <span>Sept 6</span>
            <span>Sept 13</span>
            <span>Sept 18</span>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 text-xs px-2 py-1 rounded">
                  Quantum VR Headset Shipment
                </div>
                <div className="bg-purple-500 text-xs px-2 py-1 rounded">
                  AR Glasses Launch Prep
                </div>
              </div>
              <span className="bg-blue-600 text-xs px-2 py-1 rounded">August 20</span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Recent Messages */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Messages</h3>
              <button className="text-blue-400 hover:underline text-sm">See all</button>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Brooklyn Simmons</div>
                  <div className="text-gray-400 text-sm">
                    Checking availability for MetaGlove series...
                  </div>
                </div>
                <span className="bg-red-500 text-xs px-2 py-0.5 rounded-full">3</span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Ralph Edwards</div>
                  <div className="text-gray-400 text-sm">
                    Customer inquiry about holo-lens...
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Leslie Alexander</div>
                  <div className="text-gray-400 text-sm">
                    Estimated shipping times for new orders...
                  </div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Kristin Watson</div>
                  <div className="text-gray-400 text-sm">
                    Request for marketing materials for VR expo...
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Sidebar: Team Members & Today's Task */}
          <div className="w-full md:w-72">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Team Members</h3>
                <button className="text-blue-400 hover:underline text-sm">See all</button>
              </div>
              <div className="flex -space-x-2">
                {/* Example Avatars */}
                {[1,2,3,4,5].map((n) => (
                  <img
                    key={n}
                    src={`https://i.pravatar.cc/40?img=${n}`}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-2 border-gray-900"
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Today’s Tasks</h3>
                <button className="text-blue-400 hover:underline text-sm">See all</button>
              </div>
              <ul className="space-y-3">
                <li className="bg-gray-800 p-3 rounded-lg">
                  <div className="font-medium">Meeting with Suppliers</div>
                  <div className="text-xs text-gray-400">
                    Finalize next shipment details for new VR gear.
                  </div>
                  <div className="text-xs mt-1">11:00 AM - 1:00 PM</div>
                </li>
                <li className="bg-gray-800 p-3 rounded-lg">
                  <div className="font-medium">Storefront UI Review</div>
                  <div className="text-xs text-gray-400">
                    Check new product page updates and 3D previews.
                  </div>
                  <div className="text-xs mt-1">2:00 PM - 3:30 PM</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MetaverseDashboard;
