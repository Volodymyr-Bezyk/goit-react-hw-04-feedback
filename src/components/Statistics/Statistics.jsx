import PropTypes from 'prop-types';
import NotificationMessage from 'components/NotificationMessage';
import { Box } from 'components/Box';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total === 0 ? (
      <NotificationMessage message="There is no feedback"></NotificationMessage>
    ) : (
      <>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
        <p>Total: {total}</p>
        <p>Positive feedbacks: {positivePercentage}%</p>
      </>
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
