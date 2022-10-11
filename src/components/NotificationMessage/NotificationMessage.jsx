import PropTypes from 'prop-types';
import { Notice } from './NotificationMessage.styled';

const NotificationMessage = ({ message }) => <Notice>{message}</Notice>;

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;
