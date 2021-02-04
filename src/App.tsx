/* eslint-disable no-use-before-define */
import * as React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import store from './store';

const App:React.FC = () => (
  <Provider store={store}>
    <Header />
    <Form />
  </Provider>
);

export default App;
