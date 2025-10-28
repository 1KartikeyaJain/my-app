"use client"; // Add this directive at the very top

import React, { useState } from 'react';

// --- Reusable Icon Components ---

/**
 * A simple lock icon component.
 */
const LockIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * The circular logo icon from the navbar (resembles a minus in a circle).
 */
const LogoIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// --- Navigation Components ---

/**
 * Props for the NavLink component.
 */
interface NavLinkProps {
  text: string;
  active?: boolean;
  onClick: () => void;
}

/**
 * A single navigation link for the sidebar.
 */
const NavLink: React.FC<NavLinkProps> = ({ text, active = false, onClick }) => {
  // Base classes for all links
  const baseClasses =
    'flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200';
  
  // Classes for the active state
  const activeClasses = 'bg-purple-700 text-white font-semibold shadow-md';
  
  // Classes for the inactive state
  const inactiveClasses = 'text-gray-300 hover:bg-purple-800 hover:text-white';

  return (
    <a
      onClick={onClick}
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
    >
      {text}
    </a>
  );
};

/**
 * The top horizontal navigation bar.
 */
const TopBar: React.FC = () => {
  return (
    <nav className="w-full h-14 bg-purple-950 text-gray-200 flex items-center px-6 shadow-lg z-10">
      <div className="flex items-center gap-3">
        <LogoIcon className="w-6 h-6 text-purple-400" />
        <span className="font-semibold text-lg">Rama's 360OS™</span>
      </div>
      {/* Other top-bar items like user menu could go here */}
    </nav>
  );
};

/**
 * The main vertical sidebar navigation.
 */
const SideBar: React.FC<{
  activeLink: string;
  onLinkClick: (link: string) => void;
}> = ({ activeLink, onLinkClick }) => {
  const navItems = ['Features', '360OS™ Assistant', 'Practice', 'Voice Journal'];

  return (
    <aside className="w-64 h-full bg-purple-900 text-gray-200 flex flex-col p-4 shadow-2xl">
      {/* Sidebar Header */}
      <div className="flex items-center gap-3 p-3 mb-4">
        <LogoIcon className="w-8 h-8 text-purple-300" />
        <div>
          <div className="font-bold text-white text-lg">Rama's 360OS™</div>
          <div className="text-sm text-purple-300">Experience</div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item}
            text={item}
            active={activeLink === item}
            onClick={() => onLinkClick(item)}
          />
        ))}
      </nav>
    </aside>
  );
};

// --- Main Content Component ---

/**
 * The main content area that displays content based on the active link.
 */
const MainContent: React.FC<{ activeLink: string }> = ({ activeLink }) => {
  // In a real app, this would be a router outlet or a switch statement
  // to render different components.
  
  // We'll just render the "360OS Assistant" view as shown in the image.
  
  if (activeLink !== '360OS™ Assistant') {
    return (
      <main className="flex-1 h-full p-8 text-white">
        <h1 className="text-3xl font-bold">{activeLink}</h1>
        <p className="text-gray-400 mt-2">Content for {activeLink} goes here.</p>
      </main>
    );
  }

  // Render the specific "360OS Assistant" UI
  return (
    <main className="flex-1 h-full p-8 text-white flex flex-col">
      {/* Content Header */}
      <div className="flex items-center gap-2 mb-2">
        <LockIcon className="w-6 h-6 text-purple-300" />
        <h1 className="text-2xl font-semibold">360OS™ Assistant</h1>
      </div>
      <p className="text-sm text-gray-400 mb-6 ml-8">
        Type or use the mic. Click "Listen" to hear responses. Ex: "I'm stressed"
        for guidance.
      </p>

      {/* Main Chat/Display Box */}
      <div className="flex-1 bg-purple-950/50 border border-purple-700 rounded-xl shadow-inner min-h-[60vh]">
        {/* Chat content would go here */}
      </div>
    </main>
  );
};

// --- App Layout Component ---

/**
 * The main App component that combines all parts of the layout.
 */
export default function App() {
  const [activeLink, setActiveLink] = useState('360OS™ Assistant');

  return (
    <div className="flex flex-col h-screen w-full bg-gray-950 overflow-hidden">
      {/* Top Bar */}
      <TopBar />

      {/* Main Container (Sidebar + Content) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SideBar activeLink={activeLink} onLinkClick={setActiveLink} />
        
        {/* Content Area */}
        <div className="flex-1 h-full overflow-y-auto">
          <MainContent activeLink={activeLink} />
        </div>
      </div>
    </div>
  );
}

