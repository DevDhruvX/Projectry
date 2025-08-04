// frontend/src/pages/Dashboard.jsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#151a1e] text-white">
      <header className="bg-[#2b3740] p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-[#9eafbd]">
              Welcome, {user?.user_metadata?.fullName || user?.email}
            </span>
            <button
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#2b3740] p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Profile Info</h2>
            <div className="space-y-2 text-[#9eafbd]">
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Name:</strong> {user?.user_metadata?.fullName || 'Not provided'}</p>
              <p><strong>University:</strong> {user?.user_metadata?.university || 'Not provided'}</p>
              <p><strong>Skills:</strong> {user?.user_metadata?.techSkills || 'Not provided'}</p>
            </div>
          </div>
          
          <div className="bg-[#2b3740] p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Account Status</h2>
            <div className="space-y-2 text-[#9eafbd]">
              <p><strong>Email Verified:</strong> {user?.email_confirmed_at ? 'Yes' : 'No'}</p>
              <p><strong>Joined:</strong> {new Date(user?.created_at).toLocaleDateString()}</p>
            </div>
          </div>
          
          <div className="bg-[#2b3740] p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full bg-[#c9dcec] text-[#151a1e] py-2 px-4 rounded-lg font-medium hover:bg-[#b5cee0] transition">
                Edit Profile
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg font-medium transition">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;