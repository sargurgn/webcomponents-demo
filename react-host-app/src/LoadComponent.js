import React, { useState } from 'react';

import TestableComponentLoadingComponent from './test-scenarios/TestableComponentLoadingComponent';

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
    <div>
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
          <option value='testable-form-component'>Testable Form Component</option>
        </NativeSelect>
        <FormHelperText>Select WebComponent to Load below</FormHelperText>
      </FormControl>
      <Button onClick={() => loadComponent() } variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}

export default App;
