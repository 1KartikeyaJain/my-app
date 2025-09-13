"use client"

import React, { useState, useRef, useEffect } from "react";

const minuteOptions = [
  { label: "1 minute", value: 1 },
  { label: "2 minutes", value: 2 },
  { label: "5 minutes", value: 5 },
  { label: "10 minutes", value: 10 },
];

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

const TimedPractice: React.FC = () => {
  const [minutes, setMinutes] = useState<number>(1);
  const [secondsLeft, setSecondsLeft] = useState<number>(60);
  const [active, setActive] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSecondsLeft(minutes * 60);
    setActive(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [minutes]);

  useEffect(() => {
    if (active && secondsLeft > 0) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setActive(false);
            if (timerRef.current) clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active]);

  // Sidebar/tabs reused
  const sidebarItems = [
    { name: "360OS™ Assistant" },
    { name: "Practice", active: true, highlight: true },
    { name: "Voice Journal" },
    { name: "Podcasts" },
    { name: "Community" },
    { name: "Live Practice" },
    { name: "Activity" },
  ];
  const tabItems = [
    "360OS™", "Daily", "Timed 360OS™", "Guided", "Voice Journal", "Podcasts"
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col justify-between">
        <div>
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <div className="text-purple-400 font-semibold">Rama's 360OS™</div>
                <div className="text-purple-300 text-sm">Experience</div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="text-gray-400 text-sm font-medium mb-4">Features</div>
            <nav className="space-y-2">
              {sidebarItems.map((item, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${
                    item.highlight
                      ? "bg-purple-600 text-white"
                      : item.active
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </nav>
          </div>
        </div>
        {/* Settings */}
        <div className="p-4 border-t border-gray-700">
          <div className="text-gray-400 text-sm font-medium mb-4">Settings</div>
          <div className="space-y-2">
            <div className="px-3 py-2 text-sm text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white rounded-md">Settings</div>
            <div className="flex items-center justify-between px-3 py-2 bg-gray-700 rounded-md"><span className="text-white text-sm">Light Mode</span></div>
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
        {/* Content */}
        <div className="flex-1 p-6">
          {/* Title and Tabs */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Practice Sessions</h1>
            <p className="text-gray-400 text-sm">© 2025 360OS™ by Rama Arya All Rights Reserved</p>
          </div>
          <div className="flex space-x-6 mb-8 border-b border-gray-700">
            {tabItems.map((tab, i) => (
              <button
                key={i}
                className={`pb-3 px-1 text-sm font-medium transition-colors ${
                  i === 2 ? "text-white border-b-2 border-purple-500" : "text-gray-400 hover:text-gray-300"
                }`}
              >{tab}</button>
            ))}
          </div>
          {/* Card */}
          <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 max-w-4xl mx-auto flex flex-col relative">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">Timed Practice</h2>
                <p className="text-gray-400 text-sm">Set a timer and start your session</p>
              </div>
              <div>
                <select
                  className="bg-gray-900 border border-gray-700 rounded-md shadow-sm px-4 py-2 text-white text-base"
                  value={minutes}
                  onChange={e => setMinutes(Number(e.target.value))}
                >
                  {minuteOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col items-center my-8">
              <div className="text-purple-400 text-5xl font-bold tracking-widest mb-6">
                {pad(Math.floor(secondsLeft / 60))}:{pad(secondsLeft % 60)}
              </div>
              <div className="flex space-x-4">
                <button
                  className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 py-2 rounded-md text-lg"
                  onClick={() => setActive(true)}
                  disabled={active || secondsLeft === 0}
                >Start</button>
                <button
                  className="bg-gray-800 hover:bg-gray-900 text-gray-200 font-medium px-8 py-2 rounded-md text-lg"
                  onClick={() => { setActive(false); setSecondsLeft(minutes * 60); }}
                >Reset</button>
              </div>
            </div>
            <div className="text-center pt-8">
              <span className="italic text-gray-400 text-base">
                A chime will sound at the beginning and end of your session
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimedPractice;
