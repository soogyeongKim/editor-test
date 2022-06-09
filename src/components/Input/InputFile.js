import Text from 'components/Element/Text';
import React from 'react';
import styled from 'styled-components';
import { flexRow, RowDiv, space } from 'styles/CommonCSS';
import { input, inputSize } from 'styles/InputCSS';
import { ReactComponent as AttachIcon } from 'assets/icon/input/attach.svg';
import { ReactComponent as DeleteIcon } from 'assets/icon/input/delete.svg';

function InputFile({
  invalid,
  value,
  setValues,
  name,
  fileUpload,
  placeholder,
  onChange,
  readOnly,
  accept,
  remove,
  ...props
}) {
  const onChangeHandler = (event) => {
    event.preventDefault();
    fileUpload();
  };

  const removeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    remove();
  };

  return (
    <Wrap htmlFor={name} invalid={invalid} {...props}>
      <input
        id={name}
        type="file"
        accept={accept}
        readOnly
        name={name}
        onChange={onChangeHandler}
        style={{ display: 'none' }}
      />
      <RowDiv
        width={remove ? 'calc(100% - 26px)' : '100%'}
        align="center"
        gap={10}
      >
        <AttachIcon width={12} style={{ minWidth: '12px' }} />
        <Text line={1} color={value ? 'fontBlack' : 'lightGray'}>
          {value || placeholder}
        </Text>
      </RowDiv>
      {remove && value && (
        <DeleteIcon style={{ minWidth: '26px' }} onClick={removeFile} />
      )}
    </Wrap>
  );
}

const Wrap = styled.label`
  position: relative;
  ${input}
  ${inputSize}
  ${space}
  ${flexRow('center', 'space-between')}
  gap: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export default InputFile;
