import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">PLP Task Manager</h1>
      <Button onClick={toggleTheme} variant="secondary">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </nav>
  );
};

export default Navbar;
