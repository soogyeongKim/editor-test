import React from 'react';
import styled from 'styled-components';
import Text from 'components/Element/Text';
import { common, flexRow, space } from 'styles/CommonCSS';
import buttonSize from 'styles/ButtonCss';

function Button({
  onClick,
  active,
  disabled,
  children,
  size,
  mSize,
  text,
  ...props
}) {
  return (
    <ButtonContainer
      active={active}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
      <Text weight={700} size={size || 14} mSize={mSize || 12} lineHeight={1}>
        {text}
      </Text>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  ${flexRow('center', 'center')} 
  ${common}
  ${space} 
  ${buttonSize}
  text-align: center;
  color: white;
  border-radius: 4px;
  background-color ${({ active, theme }) =>
    active ? theme.colors.main : theme.colors.colorDE};
  transition: all 150ms;
  cursor: pointer;
  padding:${({ theme }) => theme.element.padding};

  & p {
    white-space: nowrap;
    word-break: keep-all;
  }


  &:hover {
    opacity: 0.5;
  }


  @media ${({ theme }) => theme.device.tablet} { 
    padding:${({ theme }) => theme.element.mPadding};

    &:hover {
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.device.mobile} { 
    padding:${({ theme }) => theme.element.sPadding};

    &:hover {
      opacity: 1;
    }
  }
`;

export default Button;
