import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import ApiData from './api/ApiData';
import { ThemeContext } from './context/ThemeContext'; 
import DoneAnimation  from './components/Animation';

function App() {
  const { darkMode } = useContext(ThemeContext); // Get darkMode state

  return (
    <div className={darkMode ? 'dark' : ''}> {/* Apply dark class here */}
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto p-4">
          <TaskManager />
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">API Data</h2>
            <ApiData />
          </div>
        </main>
       <DoneAnimation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
