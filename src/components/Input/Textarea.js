import Text from 'components/Element/Text';
import React from 'react';
import styled from 'styled-components';
import { scrollbar } from 'styles/CommonCSS';
import { input, inputSize } from 'styles/InputCSS';

function Textarea({
  type,
  value,
  name,
  invalid,
  placeholder,
  maxLength,
  onChange,
  onKeyDown,
  readOnly,
  active,
  ...props
}) {
  const onKeyDownHandler = (e) => {
    if (onKeyDown && active) {
      if (e.key === 'Enter') {
        onKeyDown();
      }
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    let valueTemp;

    if (maxLength) {
      valueTemp = value.substring(0, maxLength);
    } else {
      valueTemp = value;
    }

    if (type === 'empty') {
      onChange(valueTemp, name);
    } else {
      onChange(valueTemp.replace(/^\s*/, ''), name);
    }
  };

  return (
    <TextareaBox
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      readOnly={readOnly}
      maxLength={maxLength}
      invalid={invalid}
      {...props}
    />
  );
}

const TextareaBox = styled.textarea`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  resize: none;
  overflow-y: overlay;
  ${inputSize}
  ${input}
  ${scrollbar}

  height: ${({ height, theme }) =>
    height
      ? Number(height)
        ? `${height}px`
        : height
      : theme.element.input.textareaHeight};
  min-height: ${({ height, theme }) =>
    height
      ? Number(height)
        ? `${height}px`
        : height
      : theme.element.input.textareaHeight};

  @media ${({ theme }) => theme.device.tablet} {
    height: ${({ mHeight, height, theme }) =>
      mHeight
        ? Number(mHeight)
          ? `${mHeight}px`
          : mHeight
        : mHeight
        ? Number(height)
          ? `${height}px`
          : height
        : theme.element.input.mTextareaHeight};

    min-height: ${({ mMinHeight, minHeight, theme }) =>
      mMinHeight
        ? Number(mMinHeight)
          ? `${mMinHeight}px`
          : mMinHeight
        : mMinHeight
        ? Number(minHeight)
          ? `${minHeight}px`
          : minHeight
        : theme.element.input.textareaHeight};
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: ${({ sHeight, height, theme }) =>
      sHeight
        ? Number(sHeight)
          ? `${sHeight}px`
          : sHeight
        : sHeight
        ? Number(height)
          ? `${height}px`
          : height
        : theme.element.input.sTextareaHeight};

    min-height: ${({ sMinHeight, minHeight, theme }) =>
      sMinHeight
        ? Number(sMinHeight)
          ? `${sMinHeight}px`
          : sMinHeight
        : sMinHeight
        ? Number(minHeight)
          ? `${minHeight}px`
          : minHeight
        : theme.element.input.textareaHeight};
  }
`;

export default Textarea;
