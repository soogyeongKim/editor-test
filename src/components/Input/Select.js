import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as DropIcon } from 'assets/icon/input/drop.svg';
import Text from 'components/Element/Text';
import { flexRow, Relative, RowDiv, scrollbar } from 'styles/CommonCSS';
import { input, inputSize } from 'styles/InputCSS';
import hexToRGB from 'modules/hexToRGB';

function Select({
  isOpen,
  setIsOpen,
  list,
  value,
  name,
  keyName,
  onChange,
  selected,
  placeholder,
  all,
  disabled,
  ...props
}) {
  const toggling = (event) => {
    event.stopPropagation();
    setIsOpen(isOpen === name ? '' : name);
  };

  const onOptionClicked = (event, selected) => {
    event.preventDefault();
    event.stopPropagation();
    onChange(selected, name);
    setIsOpen(false);
  };

  return (
    <Wrap readOnly={disabled} className="select" {...props}>
      <SelectButton
        onClick={(event) => !disabled && toggling(event)}
        disabled={disabled}
      >
        <Text
          color={
            value === 'all' || selected || value ? 'fontBlack' : 'fontGray'
          }
          line={1}
        >
          {selected || value}
        </Text>
        <Arrow open={isOpen === name} />
      </SelectButton>
      <SelectOptionDiv isOpen={isOpen === name}>
        {all && (
          <SelectOption
            onClick={(event) => onOptionClicked(event, 'all')}
            selected={value === 'all'}
          >
            <Text>{all || '전체'}</Text>
          </SelectOption>
        )}
        {list?.map((item, index) => (
          <SelectOption
            align="center"
            selected={selected || item === value}
            onClick={(event) => onOptionClicked(event, item)}
            key={`select${item}${index}`}
          >
            <Text>{keyName ? item[keyName] : item}</Text>
          </SelectOption>
        ))}
      </SelectOptionDiv>
    </Wrap>
  );
}

const Wrap = styled(Relative)`
  ${input}
  ${inputSize}
  padding: 0;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0;
  }
`;

const SelectButton = styled.button`
  ${flexRow('center', 'space-between')}
  padding: ${({ theme }) => theme.element.padding};
  width: 100%;
  height: 100%;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.main};
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: ${({ theme }) => theme.element.mPadding};
  }

  @media ${({ theme }) => theme.device.mobile} {
    padding: ${({ theme }) => theme.element.sPadding};
  }
`;

const SelectOptionDiv = styled.div`
  border-radius: ${({ theme }) => theme.element.input.border};
  z-index: 50;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  max-height: ${({ isOpen, theme }) =>
    isOpen
      ? `${Number(theme.element.input.height.replace('px', '')) * 5}px`
      : '0px'};
  overflow-y: overlay;
  overflow-x: hidden;
  border: ${({ isOpen, theme }) =>
    `${isOpen ? '1px' : '0px'} solid ${theme.colors.colorDE}`};
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  ${scrollbar}

  @media ${({ theme }) => theme.device.tablet} {
    max-height: ${({ isOpen, theme }) =>
      isOpen
        ? `${Number(theme.element.input.mHeight.replace('px', '')) * 5}px`
        : '0px'};
  }
  @media ${({ theme }) => theme.device.mobile} {
    max-height: ${({ isOpen, theme }) =>
      isOpen
        ? `${Number(theme.element.input.sHeight.replace('px', '')) * 5}px`
        : '0px'};
  }
`;

const SelectOption = styled(RowDiv)`
  min-height: ${({ theme }) => theme.element.input.height};
  padding: ${({ theme }) => theme.element.padding};
  cursor: pointer;
  background-color: ${({ selected, theme }) =>
    selected ? hexToRGB(theme.colors.main, 0.8) : 'white'};

  &:hover {
    background-color: ${({ theme }) => hexToRGB(theme.colors.main, 0.3)};
    transition: 0.2s ease-in-out;
  }

  @media ${({ theme }) => theme.device.tablet} {
    min-height: ${({ theme }) => theme.element.input.mHeight};
    padding: ${({ theme }) => theme.element.mPadding};
  }

  @media ${({ theme }) => theme.device.mobile} {
    min-height: ${({ theme }) => theme.element.input.sHeight};
    padding: ${({ theme }) => theme.element.sPadding};
  }
`;

const spin = (to) => keyframes`
  from { transform: rotate(${to}deg); }
  to { transform: rotate(${to + 180}deg); }
`;

const Arrow = styled(DropIcon)`
  -webkit-animation: ${({ open }) => (open ? spin(0) : spin(180))} 0.6s
    ease-in-out both;
  animation: ${({ open }) => (open ? spin(0) : spin(180))} 0.6s ease-in-out both;
  fill: ${({ disabled, theme }) =>
    disabled ? theme.colors.colorDE : theme.colors.main};
  width: 14px;
  height: 10px;
`;

export default Select;
