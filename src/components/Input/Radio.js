import React from 'react';
import styled from 'styled-components';
import { flexRow, elementSize, space } from 'styles/CommonCSS';

function Radio({ name, value, checked, onChange, children, ...props }) {
  return (
    <InputRadioLabel onChange={onChange} {...props}>
      <InputRadio
        type="radio"
        name={name}
        value={value}
        checked={checked}
        readOnly
        {...props}
      />
      {children}
    </InputRadioLabel>
  );
}

const InputRadioLabel = styled.label`
  display: block;
  ${elementSize}
  ${space}
  ${flexRow('center')}
  cursor:pointer;
`;

const InputRadio = styled.input`
  cursor: pointer;
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.colors.colorDE};
  border-radius: 50%;
  outline: none;
  background: white;
  margin: 0px;
  margin-right: 6px;
  transition: all 150ms;

  &:checked {
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.main};

    &:before {
      content: ' ';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({ theme }) => theme.colors.main};

      @media ${({ theme }) => theme.device.tablet} {
        min-width: 8px;
        height: 8px;
      }
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    min-width: 16px;
    height: 16px;
  }
`;

export default Radio;
