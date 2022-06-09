import React from 'react';
import styled from 'styled-components';
import { space } from 'styles/CommonCSS';
import { input, inputSize } from 'styles/InputCSS';

function Input({
  type,
  defaultValue,
  value,
  invalid,
  name,
  placeholder,
  onChange,
  onKeyDown,
  active,
  readOnly,
  maxLength,
  onBlur,
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
    const { value } = event.target;
    let valueTemp;

    if (maxLength) {
      valueTemp = value.substring(0, maxLength);
    } else {
      valueTemp = value;
    }

    if (type === 'number') {
      onChange(valueTemp.replace(/\D/, ''), name);
    } else if (type === 'notEmpty') {
      onChange(valueTemp, name);
    } else {
      onChange(valueTemp.replace(/^\s*/, ''), name);
    }
  };

  return (
    <InputBox
      type={type !== 'number' ? type : 'text'}
      defaultValue={defaultValue}
      value={value || ''}
      name={name}
      onBlur={onBlur}
      placeholder={placeholder}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      autoComplete="off"
      readOnly={readOnly}
      invalid={invalid === true}
      {...props}
    />
  );
}

const InputBox = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  ${input}
  ${inputSize}
  ${space}
`;

export default Input;
