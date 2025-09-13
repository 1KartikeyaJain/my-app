"use client"

import React, { useState } from 'react';

interface NavigationItem {
  name: string;
  isActive?: boolean;
  isHighlighted?: boolean;
}

const PracticeSession360OS: React.FC = () => {
  const [isSessionActive, setIsSessionActive] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<string>("00:30");

  const navigationItems: NavigationItem[] = [
    { name: '360OS™ Assistant' },
    { name: 'Practice', isActive: true, isHighlighted: true },
    { name: 'Voice Journal' },
    { name: 'Podcasts' },
    { name: 'Community' },
    { name: 'Live Practice' },
    { name: 'Activity' },
  ];

  const tabItems: string[] = [
    '360OS™',
    'Daily',
    'Timed 360OS™',
    'Guided', 
    'Voice Journal',
    'Podcasts'
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h1 className="text-purple-400 font-semibold">Rama's 360OS™</h1>
              <p className="text-purple-300 text-sm">Experience</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="p-4">
          <h2 className="text-gray-400 text-sm font-medium mb-4">Features</h2>
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className={`px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${
                  item.isHighlighted
                    ? 'bg-purple-600 text-white'
                    : item.isActive
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.name}
              </div>
            ))}
          </nav>
        </div>

        {/* Settings Section */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-700">
          <h2 className="text-gray-400 text-sm font-medium mb-4">Settings</h2>
          <div className="space-y-2">
            <div className="px-3 py-2 text-sm text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white rounded-md">
              Settings
            </div>
            <div className="flex items-center justify-between px-3 py-2 bg-gray-700 rounded-md">
              <span className="text-white text-sm">Light Mode</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 border border-white rounded-full"></div>
            </div>
            <span className="text-purple-400 font-medium">Rama's 360OS™</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Practice Sessions</h1>
            <p className="text-gray-400 text-sm">© 2025 360OS™ by Rama Arya All Rights Reserved</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-6 mb-8 border-b border-gray-700">
            {tabItems.map((tab, index) => (
              <button
                key={index}
                className={`pb-3 px-1 text-sm font-medium transition-colors ${
                  index === 0 // 360OS™ tab active
                    ? 'text-white border-b-2 border-purple-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 360OS Session Content */}
          <div className="max-w-4xl">
            {/* Session Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">360OS™ Awareness Practice</h2>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Experience a 30-second moment of Fresh Unconditioned Nowness (F.U.N.) - a brief pause to reconnect with your natural awareness.
              </p>
              <p className="text-gray-400 text-sm">
                This practice invites you to simply be present, without any special technique or effort.
              </p>
            </div>

            {/* Session Timer Card */}
            <div className="bg-gray-800 rounded-xl p-8 mb-6">
              <div className="flex flex-col items-center">
                {/* Timer Display */}
                <div className="mb-8">
                  <div className="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center relative">
                    <div className="w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">{timeRemaining}</span>
                    </div>
                    {/* Progress ring can be added here if needed */}
                  </div>
                </div>

                {/* Control Button */}
                <button
                  onClick={() => setIsSessionActive(!isSessionActive)}
                  className={`px-12 py-4 rounded-full text-lg font-medium transition-all ${
                    isSessionActive
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {isSessionActive ? 'Stop' : 'Start Practice'}
                </button>

                {/* Session Status */}
                <div className="mt-4 text-center">
                  <p className="text-gray-400 text-sm">
                    {isSessionActive ? 'Session in progress...' : 'Ready to begin your 30-second practice'}
                  </p>
                </div>
              </div>
            </div>

            {/* Practice Guidelines */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Practice Guidelines</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">
                    Simply sit comfortably and allow yourself to be present
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">
                    No need to control your breath, thoughts, or experience
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">
                    Let your natural awareness be as it is
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">
                    When the timer ends, simply return to your day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeSession360OS;
