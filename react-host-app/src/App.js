import React, { useState } from 'react';
import './App.css';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import { useStyles } from './App.styles';
import TestableComponentLoadingComponent from './test-scenarios/TestableComponentLoadingComponent';
import TestableFormComponentLoadingComponent from './test-scenarios/TestableFormComponentLoadingComponent';

function App() {
  const classes = useStyles();
  const [state, setState] = useState({
    id: 'select',
    name: 'Select',
  });
  const [selectedComponent, setSelectedComponent] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const loadComponent = () => {
    setSelectedComponent(state.id);
  }

  return (
    <div style={{padding: '20px'}}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="id-native-simple">Select</InputLabel>
        <NativeSelect
          value={state.id}
          onChange={handleChange}
          inputProps={{
            name: 'id',
            id: 'id-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value='testable-component'>Testable Component</option>
          <option value='testable-formcomponent'>Testable Form Component</option>
        </NativeSelect>
        <FormHelperText>Select WebComponent to Load below</FormHelperText>
      </FormControl>
      <br />
      <Button id='but-load-component' onClick={() => loadComponent() } variant="contained" color="primary">
        Submit
      </Button>
      <br />
      <div>
          {selectedComponent && selectedComponent === 'testable-component' && <TestableComponentLoadingComponent />}
          {selectedComponent && selectedComponent === 'testable-formcomponent' && <TestableFormComponentLoadingComponent />}
      </div>
    </div>

  );
}

export default App;
