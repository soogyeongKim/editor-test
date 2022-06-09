import React from 'react';
import styled, { css } from 'styled-components';
import { common, elementSize, fadein, position, space } from 'styles/CommonCSS';

function Text({
  size,
  mSize,
  weight,
  mWeight,
  lineHeight,
  mLineHeight,
  color,
  align,
  children,
  line,
  mLine,
  family,
  underline,
  whiteSpace,
  mWhiteSpace,
  letterSpace,
  mLetterSpace,
  ...props
}) {
  return (
    <TextP
      size={size}
      mSize={mSize}
      weight={weight}
      mWeight={mWeight}
      lineHeight={lineHeight}
      mLineHeight={mLineHeight}
      color={color}
      line={line}
      mLine={mLine}
      family={family}
      underline={underline}
      align={align}
      whiteSpace={whiteSpace}
      mWhiteSpace={mWhiteSpace}
      letterSpace={letterSpace}
      mLetterSpace={mLetterSpace}
      {...props}
    >
      {children}
    </TextP>
  );
}

const TextP = styled.p`
  ${elementSize}
  ${common}
  ${space}
  ${position}
  ${fadein()}
  color: ${({ color, theme }) =>
    color ? (theme.colors[color] ? theme.colors[color] : color) : 'inherit'};
  font-size: ${({ size }) => (size ? `${size / 16}rem` : 'inherit')};
  line-height: ${({ lineHeight }) => lineHeight || 'inherit'};
  font-weight: ${({ weight }) => weight || 'inherit'};
  font-family: ${({ family }) => (family ? 'Atomy' : 'inherit')};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  white-space: ${({ whiteSpace }) => whiteSpace || 'normal'};
  letter-spacing: ${({ letterSpace }) => letterSpace || 'normal'};

  ${({ line }) =>
    line &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${line};
      -webkit-box-orient: vertical;
    `}

  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ mSize, size }) =>
      mSize
        ? `${Number(mSize) / 16}rem`
        : size
        ? `${Number(size) / 16}rem`
        : '0.825rem'};
    line-height: ${({ mLineHeight }) => mLineHeight || 'inherit'};
    font-weight: ${({ mWeight, weight }) => mWeight || weight || 'inherit'};
    white-space: ${({ mWhiteSpace, whiteSpace }) =>
      mWhiteSpace || whiteSpace || 'normal'};
    letter-spacing: ${({ mLetterSpace, letterSpace }) =>
      mLetterSpace || letterSpace || 'normal'};

    ${({ mLine, line }) =>
      (mLine || line) &&
      css`
        white-space: pre-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${mLine || line};
        -webkit-box-orient: vertical;
      `}
  }
`;

export default Text;
