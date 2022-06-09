import { css } from 'styled-components';
import hexToRGB from 'modules/hexToRGB';
import { elementSize } from './CommonCSS';

export const input = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: white;
  border: ${({ theme }) => `1px solid ${theme.colors.colorDE}`};
  border-radius: ${({ theme }) => theme.element.input.radius};
  padding: ${({ theme }) => theme.element.input.padding};
  line-height: 1;
  font-size: inherit;
  font-family: ${({ type }) =>
    type === 'password' ? 'Noto Sans KR' : 'inherit'};
  color: inherit;

  &::placeholder {
    font-family: inherit;
    font-size: inherit;
    color: ${({ theme }) => theme.colors.colorDE};
  }

  &:focus {
    border: ${({ theme }) => `2px solid ${theme.colors.main}`};
  }

  ${({ invalid, theme }) =>
    invalid
      ? css`
          border: 2px solid ${theme.colors.warningColor};

          &:focus {
            border: 2px solid ${theme.colors.warningColor};
          }
        `
      : ''}

  ${({ readOnly, theme }) =>
    readOnly &&
    css`
      background-color: ${hexToRGB(theme.colors.colorDE, 0.29)};
      opacity: 0.5;
      cursor: not-allowed;

      &:focus {
        border: ${({ theme }) => `1px solid ${theme.colors.colorDE}`};
      }
    `}

  @media ${({ theme }) => theme.device.tablet} {
    padding: ${({ theme }) => theme.element.input.mPadding};
  }
`;

export const inputSize = css`
  ${elementSize}
  box-sizing: border-box;

  height: ${({ height, theme }) =>
    height
      ? Number(height)
        ? `${height}px`
        : `${height}`
      : theme.element.input.height};

  @media ${({ theme }) => theme.device.tablet} {
    height: ${({ mHeight, height, theme }) =>
      mHeight
        ? Number(mHeight)
          ? `${mHeight}px`
          : mHeight
        : height
        ? Number(height)
          ? `${height}px`
          : height
        : theme.element.input.mHeight};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ sHeight, mHeight, height, theme }) =>
      sHeight
        ? `height:  ${Number(sHeight) ? `${sHeight}px` : sHeight};`
        : mHeight
        ? `height:  ${Number(mHeight) ? `${mHeight}px` : mHeight};`
        : height
        ? `height : ${Number(height) ? `${height}px` : height};`
        : theme.element.input.sHeight}
  }
`;
