"use client";

import React, { useState } from 'react';

const Podcasts = () => {
  const [podBeanUrl, setPodBeanUrl] = useState('');

  const handleLoadPlayer = () => {
    // Logic to load podcast player
    console.log('Loading podcast player with URL:', podBeanUrl);
  };

  const handleListen = (podcastTitle) => {
    // Logic to play podcast
    console.log('Playing podcast:', podcastTitle);
  };

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Left Sidebar */}
      <div className="w-64 bg-slate-800 border-r border-slate-700">
        {/* Logo/Header */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">⊖</span>
            </div>
            <span className="text-purple-400 font-medium">Rama's 3600S™</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="p-4">
          <div className="mb-6">
            <h3 className="text-gray-400 text-sm font-medium mb-3">Features</h3>
            <nav className="space-y-2">
              <button className="block text-gray-300 hover:text-white py-1 w-full text-left">
                3600S™ Assistant
              </button>
              <button className="block text-gray-300 hover:text-white py-1 w-full text-left">
                Practice
              </button>
              <button className="block text-gray-300 hover:text-white py-1 w-full text-left">
                Voice Journal
              </button>
              <button className="block text-purple-400 font-medium py-1 bg-slate-700 px-2 -mx-2 rounded w-full text-left">
                Podcasts
              </button>
              <button className="block text-gray-300 hover:text-white py-1 w-full text-left">
                Community
              </button>
              <button className="block text-gray-300 hover:text-white py-1 w-full text-left">
                Live Practice
              </button>
              <button className="block text-gray-300 hover:text-white py-1 w-full text-left">
                Activity
              </button>
            </nav>
          </div>

          <div className="mb-6">
            <h3 className="text-gray-400 text-sm font-medium mb-3">Settings</h3>
            <nav>
              <button className="block text-gray-300 hover:text-white py-1 w-full text-left">
                Settings
              </button>
            </nav>
          </div>
        </div>

        {/* Light Mode Toggle */}
        <div className="absolute bottom-4 left-4">
          <button className="text-gray-400 hover:text-white text-sm">
            Light Mode
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⊖</span>
              </div>
              <span className="text-sm text-purple-400">Rama's 3600S™</span>
            </div>
            <span className="text-sm text-gray-400">Experience</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-purple-400 text-2xl">🎧</div>
              <h1 className="text-2xl font-semibold text-white">Podcasts</h1>
            </div>
            <p className="text-gray-400 mb-2">
              Listen to Rama's podcasts about F.U.N (Fresh Unconditioned Now-ness)
            </p>
            <p className="text-gray-500 text-xs">
              © 2025 3600S™ by Rama Arya All Rights Reserved
            </p>
          </div>

          {/* Pod Bean Integration Section */}
          <div className="bg-slate-800 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-white text-xl">📝</div>
              <h2 className="text-lg font-medium text-white">Pod Bean Integration</h2>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Embed Pod Bean player for Rama's podcasts about 3600S™ and F.U.N
            </p>

            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">
                Pod Bean Embed URL
              </label>
              <input
                type="text"
                placeholder="Enter Pod Bean embed URL..."
                value={podBeanUrl}
                onChange={(e) => setPodBeanUrl(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            <button
              onClick={handleLoadPlayer}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
            >
              Load Podcast Player
            </button>
          </div>

          {/* Featured Podcasts Section */}
          <div>
            <h2 className="text-lg font-medium text-white mb-2">Featured Podcasts</h2>
            <p className="text-gray-400 text-sm mb-6">
              Explore Rama's teachings about 360 OS practice and F.U.N
            </p>

            <div className="space-y-4">
              {/* Podcast 1 */}
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-2">Understanding F.U.N</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Fresh Unconditioned Now-ness and 360 OS practice
                    </p>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-teal-500 text-white text-xs rounded-full">
                        360 OS
                      </span>
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
                        F.U.N
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <div className="text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                      </svg>
                    </div>
                    <button
                      onClick={() => handleListen('Understanding F.U.N')}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition-colors"
                    >
                      Listen
                    </button>
                  </div>
                </div>
              </div>

              {/* Podcast 2 */}
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-2">GPS Locator Practice</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Advanced techniques for consciousness navigation
                    </p>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-teal-500 text-white text-xs rounded-full">
                        360 OS
                      </span>
                      <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                        Practice
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <div className="text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                      </svg>
                    </div>
                    <button
                      onClick={() => handleListen('GPS Locator Practice')}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition-colors"
                    >
                      Listen
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Podcast Placeholder */}
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-2">Advanced 360 OS Techniques</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Deep dive into consciousness expansion methods
                    </p>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-teal-500 text-white text-xs rounded-full">
                        360 OS
                      </span>
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">
                        Advanced
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <div className="text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                      </svg>
                    </div>
                    <button
                      onClick={() => handleListen('Advanced 360 OS Techniques')}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition-colors"
                    >
                      Listen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
