import PropTypes from 'prop-types';

const NotificationMessage = ({ message }) => <p>{message}</p>;

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;
