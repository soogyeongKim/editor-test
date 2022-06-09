import React from 'react';
import styled from 'styled-components';
import { common, elementSize, position, space } from 'styles/CommonCSS';

function ResponsiveDiv({ view, mWidth, children, ...props }) {
  return (
    <Wrap view={view} mWidth={mWidth} {...props}>
      {children}
    </Wrap>
  );
}

const Wrap = styled.div`
  ${elementSize}
  ${common}
  ${space}
  ${position}
  display: ${({ view }) => (view?.includes('pc') ? 'initial' : ' none')};

  @media ${({ theme }) => theme.device.tablet} {
    display: ${({ view }) => (view?.includes('tablet') ? 'initial' : ' none')};
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: ${({ view }) => (view?.includes('mobile') ? 'initial' : ' none')};
  }
`;

export default ResponsiveDiv;
