// app/page.tsx or pages/index.tsx
import React from 'react';

export default function Ramas360OS() {
  return (
    
    <div className="flex min-h-screen bg-gradient-to-br from-[#21214d] to-[#20122e] text-white">
      {/* Sidebar */}
      <aside className="w-72 bg-[#181946] flex flex-col justify-between">
        <div>
          {/* Top Sidebar Title */}
          <div className="py-6 px-8 border-b border-[#50417a]">
           <nav> <h1 className="text-lg font-bold text-[#b97bf5]">Rama’s 360OS™</h1></nav>
            <p className="text-base mt-2 text-[#b97bf5] font-semibold">Rama’s 360OS™ Experience</p>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-6 px-8">
            <h2 className="text-xs font-bold uppercase text-[#a6a3b8] mb-4">Features</h2>
            <ul className="space-y-2">
              <li>
                <div className="bg-[#30114e] rounded-lg px-4 py-2 text-[#b97bf5] font-semibold flex items-center">
                  360OS™ Assistant
                </div>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 rounded-lg text-[#a6a3b8] hover:bg-[#30114e] hover:text-[#b97bf5]">Practice</button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 rounded-lg text-[#a6a3b8] hover:bg-[#30114e] hover:text-[#b97bf5]">Voice Journal</button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 rounded-lg text-[#a6a3b8] hover:bg-[#30114e] hover:text-[#b97bf5]">Podcasts</button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 rounded-lg text-[#a6a3b8] hover:bg-[#30114e] hover:text-[#b97bf5]">Community</button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 rounded-lg text-[#a6a3b8] hover:bg-[#30114e] hover:text-[#b97bf5]">Live Practice</button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 rounded-lg text-[#a6a3b8] hover:bg-[#30114e] hover:text-[#b97bf5]">Activity</button>
              </li>
            </ul>
            <h2 className="text-xs font-bold uppercase text-[#a6a3b8] mt-8 mb-2">Settings</h2>
            <button className="w-full text-left px-4 py-2 rounded-lg text-[#a6a3b8] hover:bg-[#30114e] hover:text-[#b97bf5]">Settings</button>
          </nav>
        </div>
        {/* Light Mode Button */}
        <div className="w-full p-8">
          <button className="w-full bg-[#23244d] text-[#a6a3b8] font-bold py-2 rounded-lg hover:bg-[#30114e]">
            Light Mode
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar / Header */}
        <div className="bg-gradient-to-r from-[#23124f] to-[#2f1d2f] border-b border-[#50417a] px-8 py-3 flex items-center">
          <span className="text-[#b97bf5] font-semibold text-lg mr-4">
            <span role="img" aria-label="Assistant" className="mr-2">🛎️</span>
            360OS™ Assistant
          </span>
          <span className="text-[#a6a3b8] text-sm ml-auto">
            Type or use the mic Click "Listen" to hear responses. Ex: "I'm stressed" for guidance.
          </span>
        </div>
        {/* Main Assistant Box */}
        <div className="flex-1 bg-gradient-to-br from-[#21144c] to-[#220d33] rounded-lg m-8 shadow-lg flex flex-col justify-end">
          {/* Chat Input Area */}
          <div className="flex items-center pb-6 px-6">
            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-[#30114e] text-[#b97bf5] mr-3">
              <span role="img" aria-label="Mic">🎤</span>
            </button>
            <input
              type="text"
              placeholder="Type your message or click mic to speak..."
              className="flex-1 px-4 py-2 rounded-lg bg-[#23224e] text-[#b97bf5] placeholder-[#a6a3b8] outline-none"
            />
            <button className="ml-3 px-6 py-2 bg-[#b97bf5] text-[#181946] font-bold rounded-lg hover:bg-[#d1a3fa]">
              SEND
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
