import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  padding: ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  text-transform: ${p => p.theme.caps.textTransform};
  background-color: ${p => p.theme.buttons.primary.bg};
  color: ${p => p.theme.buttons.primary.color};
  cursor: pointer;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.min};
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

  :hover {
    background-color: ${p => p.theme.buttons.secondary.bg};
    color: ${p => p.theme.buttons.secondary.color};
  }
`;

export const ListItem = styled.li`
  :not(:first-child) {
    margin-left: ${p => p.theme.space[2]}px;
  }
`;
