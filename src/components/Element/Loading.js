import React from "react";
import styled, { css, keyframes } from "styled-components";

function Loading({ type }) {
  return (
    <LoaderWrap type={type}>
      <Loader type={type}></Loader>
    </LoaderWrap>
  );
}

const LoaderWrap = styled.div`
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${({ type }) =>
    type === "inside"
      ? css`
          position: absolute;
          background-color: white;
        `
      : css`
          position: fixed;
          background-color: rgba(244, 244, 249, 0.6);
        `}
`;

const spin = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(359deg); }`;

const loader10g = keyframes`
0%{background-color: rgba(172,172,172, .2);}
25%{background-color: rgba(172,172,172, 1);}
50%{background-color: rgba(172,172,172, .2);}
75%{background-color: rgba(172,172,172, .2);}
100%{background-color: rgba(172,172,172, .2);}`;

const loader10m = keyframes`
  0%{background-color: rgba(172,172,172, .2);}
  25%{background-color: rgba(172,172,172, .2);}
  50%{background-color: rgba(172,172,172, 1);}
  75%{background-color: rgba(172,172,172, .2);}
  100%{background-color: rgba(172,172,172, .2);}
`;

const loader10d = keyframes`
0%{background-color: rgba(172,172,172, .2);}
  25%{background-color: rgba(172,172,172, .2);}
  50%{background-color: rgba(172,172,172, .2);}
  75%{background-color: rgba(172,172,172, 1);}
  100%{background-color: rgba(172,172,172, .2);}`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ type }) =>
    type === "inside"
      ? css`
          width: 12px;
          height: 12px;
          border-radius: 12px;
          -webkit-animation: ${loader10m} 1.5s ease-in-out infinite;
          animation: ${loader10m} 1.5s ease-in-out infinite;

          &:before {
            content: "";
            position: absolute;
            top: 0px;
            left: -25px;
            height: 12px;
            width: 12px;
            border-radius: 12px;
            -webkit-animation: ${loader10g} 1.5s ease-in-out infinite;
            animation: ${loader10g} 1.5s ease-in-out infinite;
          }

          &:after {
            content: "";
            position: absolute;
            top: 0px;
            left: 25px;
            height: 10px;
            width: 10px;
            border-radius: 10px;
            -webkit-animation: ${loader10d} 1.5s ease-in-out infinite;
            animation: ${loader10d} 1.5s ease-in-out infinite;
          }
        `
      : css`
          width: 60px;
          height: 60px;
          border: 6px solid ${({ theme }) => theme.colors.main};
          border-right-color: white;
          border-top-color: white;
          border-radius: 100%;
          animation: ${spin} 900ms infinite linear;
        `}
`;

export default Loading;
