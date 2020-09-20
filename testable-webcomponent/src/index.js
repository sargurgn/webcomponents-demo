import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { convert } from 'web-react-components';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';

// ReactDOM.render(
//   <FormApp />,
//   document.getElementById('root-wc')
// );

const generateClassName1 = createGenerateClassName({
   seed: 'testable-component-style'
});

const WComponent = ({  }) => (
  <StylesProvider generateClassName={generateClassName1}>
   <App />
  </StylesProvider>
);

const TestableComponent = convert(WComponent, [], {}, false);

export default { TestableComponent };