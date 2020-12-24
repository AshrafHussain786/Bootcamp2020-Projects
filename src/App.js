import React from 'react';
import { Provider } from 'react-redux';
import createStore from './lib/redux';
import InboxScreen from './components/InboxScreen';
import './index.css';

function App() {
  return (
    <Provider store={createStore}>
      <InboxScreen />
    </Provider>
  );
}
export default App;