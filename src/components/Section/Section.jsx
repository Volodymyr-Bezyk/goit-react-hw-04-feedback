import PropTypes from 'prop-types';
import { Block, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <Block>
    {title && <Title>{title}</Title>}
    {children}
  </Block>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
