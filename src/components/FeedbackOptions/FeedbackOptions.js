import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = Object.keys(options);

  return (
    <>
      {buttons.map(btn => (
        <button
          key={btn}
          name={btn}
          type="button"
          onClick={onLeaveFeedback}
          className={s.button}
        >
          {btn[0].toUpperCase() + btn.slice(1)}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
