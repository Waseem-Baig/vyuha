"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-black/50 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <p className="text-gray-400 mb-8">
          Manage your account settings, notifications, and preferences.
        </p>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="flex items-center justify-between bg-black/80 p-4 rounded-lg">
            <div>
              <h2 className="text-lg font-semibold">Profile Settings</h2>
              <p className="text-gray-400 text-sm">
                Update your personal information and account details.
              </p>
            </div>
            <Link
              href="/profile/settings"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg"
            >
              Manage
            </Link>
          </div>

          {/* Notification Preferences */}
          <div className="flex items-center justify-between bg-black/80 p-4 rounded-lg">
            <div>
              <h2 className="text-lg font-semibold">
                Notification Preferences
              </h2>
              <p className="text-gray-400 text-sm">
                Customize how you receive notifications.
              </p>
            </div>
            <Link
              href="/profile/notifications"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg"
            >
              Manage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
