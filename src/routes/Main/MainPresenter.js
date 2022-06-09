import Text from 'components/Element/Text';
import Editor from 'components/Input/Editor';
import React from 'react';
import { Div } from 'styles/CommonCSS';

function MainPresenter(props) {
  return (
    <Div width="100%" height="100%" padding="100px">
      <Text>CK Editor5</Text>
      <Editor />
    </Div>
  );
}

export default MainPresenter;
