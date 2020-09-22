import React from 'react';
import { AppContext, AppProvider } from './AppContextProvider';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter() });

describe("AppContext", () => {

  it("tests startApp & stopApp function", () => {
    const TestComponent = () => {
      const { startApp, stopApp, appState } = React.useContext(AppContext)

      return <>
        <div data-testid="app-state">App State is {appState}</div>
        <button data-testid="start-button" onClick={startApp}>Start App</button>
        <button data-testid="stop-button" onClick={stopApp}>Stop App</button>
      </>
    }

    const wrapper = mount(<AppProvider><TestComponent /></AppProvider>)

    expect(wrapper.find('[data-testid="app-state"]').text()).toEqual('App State is Unavialable')
    wrapper.find('button[data-testid="start-button"]').simulate('click')
    expect(wrapper.find('[data-testid="app-state"]').text()).toEqual('App State is Started')
    wrapper.find('button[data-testid="stop-button"]').simulate('click')
    expect(wrapper.find('[data-testid="app-state"]').text()).toEqual('App State is Stopped')
  })

})