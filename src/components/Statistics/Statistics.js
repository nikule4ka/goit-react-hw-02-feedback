import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <>
      <ul className={s.item}>
        <li>
          <span>Good:</span>
          <span>{good}</span>
        </li>
        <li>
          <span>Neutral:</span>
          <span>{neutral}</span>
        </li>
        <li>
          <span>Bad:</span>
          <span>{bad}</span>
        </li>
        <li>
          <span>Total:</span>
          <span>{totalFeedback}</span>
        </li>
        <li>
          <span>Positive feedback:</span>
          <span>{positiveFeedback}%</span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
