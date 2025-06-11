import css from './App.css';
import React from 'react';
import PizzaBox from './components/PizzaBox';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import HookContainer from './components/HookContainer';
import BuggerBox from './components/redux/BuggerBox';
import CustomerChoice from './components/CustomerChoice';
import CustomHookApicall from './components/CustomHookApicall';

function App() {

  return (
    <div >
      <Provider store={store}>
        {/* <PizzaBox />
        <BuggerBox />
        // <HookContainer /> */}

        <CustomHookApicall />
      </Provider>
    </div>
  );
}

export default App;
