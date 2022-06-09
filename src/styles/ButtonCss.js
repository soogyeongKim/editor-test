const { css } = require('styled-components');
const { elementSize } = require('./CommonCSS');

const buttonSize = css`
  ${elementSize}
  box-sizing: border-box;

  width: ${({ width, theme }) =>
    width
      ? Number(width)
        ? `${width}px`
        : `${width}`
      : theme.element.button.width};
  height: ${({ height, theme }) =>
    height
      ? Number(height)
        ? `${height}px`
        : `${height}`
      : theme.element.button.height};

  @media ${({ theme }) => theme.device.tablet} {
    width: ${({ mWidth, width, theme }) =>
      mWidth
        ? Number(mWidth)
          ? `${mWidth}px`
          : mWidth
        : width
        ? Number(width)
          ? `${width}px`
          : width
        : theme.element.button.mWidth};
    height: ${({ mHeight, height, theme }) =>
      mHeight
        ? Number(mHeight)
          ? `${mHeight}px`
          : mHeight
        : height
        ? Number(height)
          ? `${height}px`
          : height
        : theme.element.button.mHeight};
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${({ sWidth, mWidth, width, theme }) =>
      sWidth
        ? `width:  ${Number(sWidth) ? `${sWidth}px` : sWidth};`
        : mWidth
        ? `width:  ${Number(mWidth) ? `${mWidth}px` : mWidth};`
        : width
        ? `width : ${Number(width) ? `${width}px` : width};`
        : theme.element.button.sWidth}

    ${({ sHeight, mHeight, height, theme }) =>
      sHeight
        ? `height:  ${Number(sHeight) ? `${sHeight}px` : sHeight};`
        : mHeight
        ? `height:  ${Number(mHeight) ? `${mHeight}px` : mHeight};`
        : height
        ? `height : ${Number(height) ? `${height}px` : height};`
        : theme.element.button.sHeight}
  }
`;

export default buttonSize;
