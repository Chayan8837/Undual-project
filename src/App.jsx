// App.jsx

import React from 'react';
import { Provider } from 'react-redux';
import Shop from './components/Shop';

import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Shop/>
      </div>
    </Provider>
  );
};

export default App;

