/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/extensions */
import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';

// import RepositoryList from './components/RepositoryList';

import store from './store';

const App:React.FC = () => (
  <Provider store={store}>
    {/* <RepositoryList /> */}
    <Header />
  </Provider>
);

export default App;
