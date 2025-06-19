import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, body }) => {
  return (
    <div className="bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-lg shadow p-4">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{body}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Card;
