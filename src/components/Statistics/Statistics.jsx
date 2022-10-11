import PropTypes from 'prop-types';
import NotificationMessage from 'components/NotificationMessage';
import {
  ListItem,
  Text,
  Total,
  Positive,
  PositiveText,
} from './Statistics.styled';

import { Box } from 'components/Box';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total === 0 ? (
      <NotificationMessage message="There is no feedback"></NotificationMessage>
    ) : (
      <>
        <Box as="ul" display="flex" mb={2}>
          <ListItem>
            Good: <Text>{good}</Text>
          </ListItem>
          <ListItem>
            Neutral: <Text>{neutral}</Text>
          </ListItem>
          <ListItem>
            Bad: <Text>{bad}</Text>
          </ListItem>
        </Box>
        <Total>Total: {total}</Total>
        <Positive>
          Positive feedbacks: <PositiveText>{positivePercentage}%</PositiveText>
        </Positive>
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
