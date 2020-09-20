import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStylesForm } from './App.styles';

function FormApp() {

  const classes = useStylesForm();
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');

  useEffect(() => {
    console.log('inside form component');
  }, []);

  const submitForm = () => {
    console.log('inside submitForm..');
    const colorObj = {
      color1,
      color2,
      color3
    }
    console.log('colorObj', colorObj);
    const event = new CustomEvent('colorFormSubmitted', {detail: colorObj});
    document.dispatchEvent(event);
  };

  return (
    <div className="FormApp" style={{ 'padding': '50px' }}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="color-1"
            label="Enter Color 1"
            variant="outlined"
            value={color1}
            onChange={(e) => setColor1(e.currentTarget.value)}
          />
          <TextField
            required
            id="color-2"
            label="Enter Color 2"
            variant="outlined"
            value={color2}
            onChange={(e) => setColor2(e.currentTarget.value)}
          />
          <TextField
            required
            id="color-3"
            label="Enter Color 3"
            variant="outlined"
            value={color3}
            onChange={(e) => setColor3(e.currentTarget.value)}
          />
        </div>
        <div style={{ paddingLeft: '10px' }}><Button id="host_message" variant="contained" color="primary" onClick={() => submitForm()}>Submit</Button></div>
      </form>
    </div>
  );
}

export default FormApp;
