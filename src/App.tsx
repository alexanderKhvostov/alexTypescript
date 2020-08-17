import React from 'react';
import MainWrapper from './Features/MainWrapper';
import { Provider } from 'react-redux';
import store from './core/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <MainWrapper />
      </div>
    </Provider>
  );
}

export default App;
