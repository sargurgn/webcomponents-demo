import React, { useEffect, useState } from 'react';

import { useStyles } from './App.styles';
import PropsExample from './components/props-example/props-example';
import ApiService from './utils/api-service';

function App() {

  const classes = useStyles();
  const [parentColor, setParentColor] = useState('');

  const printMsg = (e) => {
    setParentColor(e.currentTarget.value);
    const event = new CustomEvent('parentColorUpdated', {detail: {parentColor: e.currentTarget.value}});
    document.dispatchEvent(event);
  };

  const getDefaultColorFromServer = () => {
    ApiService.get('/colors').then((res) => {
      setParentColor(res.data.defaultColor);
    });
  }

  const onLoadChange = () => {
    console.log('Inside onLoadChange func..')
  }

  useEffect(() => {
    console.log('inside app component');
    getDefaultColorFromServer();
  },[]);

  return (
    <div className="App">
      <div className={classes.appDiv}>
        <div data-testid='parentdiv' className={classes.parentButton} style={{ backgroundColor: parentColor }}>ParentDiv-{parentColor}</div>
        <br /><br />
        <PropsExample color={parentColor} label="Update Parent.." printMsg={printMsg} onLoadChange={onLoadChange} />
      </div>
    </div>
  );
}

export default App;
