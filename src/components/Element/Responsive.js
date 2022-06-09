import React from 'react';
import styled from 'styled-components';

function Responsive({ mobile, pc, tablet }) {
  return (
    <>
      <MobileWrap>{mobile}</MobileWrap>
      <TabletWrap>{tablet}</TabletWrap>
      <PCWrap>{pc}</PCWrap>
    </>
  );
}

const MobileWrap = styled.span`
  display: none;

  @media ${({ theme }) => theme.device.mobile} {
    display: initial;
  }
`;

const TabletWrap = styled.span`
  display: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: initial;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const PCWrap = styled.span`
  display: initial;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

export default Responsive;
