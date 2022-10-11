import styled from 'styled-components';

export const Block = styled.section`
  width: ${p => p.theme.sizes.w.med};
  height: ${p => p.theme.sizes.h.med};

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.bg};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.min};

  padding: ${p => p.theme.space[3]}px;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
`;
