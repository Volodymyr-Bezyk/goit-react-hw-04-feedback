import styled from 'styled-components';

export const ListItem = styled.li`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.heading};

  :not(:first-child) {
    margin-left: ${p => p.theme.space[3]}px;
  }
`;

export const Text = styled.span`
  display: inline-block;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.accent};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.med};
`;

export const Total = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const Positive = styled.p`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[0]}px;
`;
export const PositiveText = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.accent};
  padding: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
`;
