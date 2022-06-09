import React from 'react';
import styled, { css } from 'styled-components';
import { elementSize, flexRow, space } from 'styles/CommonCSS';
import { ReactComponent as CheckIcon } from 'assets/icon/input/check.svg';

function CheckBox({ name, value, checked, onChange, children, ...props }) {
  return (
    <CheckBoxLabel {...props}>
      <HiddenCheckbox
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
      />
      <StyledCheckbox checked={checked}>
        <Icon />
      </StyledCheckbox>
      {children}
    </CheckBoxLabel>
  );
}

const CheckBoxLabel = styled.label`
  ${elementSize}
  ${space}
  ${flexRow('center', 'flex-start')}
  cursor:pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 0px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0px;
`;

const Icon = styled(CheckIcon)`
  width: 12px;
  height: 8px;
  ${({ theme }) =>
    theme.element.input.checkboxType === 'visibility'
      ? css`
          visibility: hidden;
          fill: white;
        `
      : css`
          fill: ${theme.colors.colorDE};
        `}
`;

const StyledCheckbox = styled.div`
  ${flexRow('center', 'center')}
  border-radius: ${({ theme }) => theme.element.input.radius};
  min-width: 18px;
  min-height: 18px;
  width: 18px;
  height: 18px;
  transition: all 150ms;
  margin-right: 8px;

  ${({ checked, theme }) =>
    theme.element.input.checkboxType === 'visibility'
      ? css`
          border: 1px solid
            ${checked ? theme.colors.main : theme.colors.colorDE};
          background-color: ${checked ? theme.colors.main : 'white'};
          ${Icon} {
            visibility: ${checked ? 'visible' : 'hidden'};
          }
        `
      : css`
          background-color: white;
          border: 1px solid
            ${checked ? theme.colors.main : theme.colors.colorDE};

          ${Icon} {
            fill: ${checked ? theme.colors.main : theme.colors.colorDE};
          }
        `}
`;

export default CheckBox;
