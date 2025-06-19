import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto py-4 text-center text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
    </footer>
  );
};

export default Footer;
