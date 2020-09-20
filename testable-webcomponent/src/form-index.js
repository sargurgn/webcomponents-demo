import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

import FormApp from './FormApp';
import { convert } from 'web-react-components';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';

// ReactDOM.render(
//   <FormApp />,
//   document.getElementById('root-wc')
// );

const generateClassName2 = createGenerateClassName({
  seed: ''
});

const FormComponent = ({  }) => (
  <StylesProvider generateClassName={generateClassName2}>
   <FormApp />
  </StylesProvider>
);

const TestableFormComponent = convert(FormComponent, [], {}, false);

export default { TestableFormComponent };