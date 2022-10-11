import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { ListItem, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Box display="flex" as="ul">
    {options.map(option => (
      <ListItem key={option}>
        <FeedbackBtn type="button" onClick={onLeaveFeedback(option)}>
          {option}
        </FeedbackBtn>
      </ListItem>
    ))}
  </Box>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
