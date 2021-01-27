/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/extensions */
import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
// import Grid from './components/Grid/Grid';
// import RepositoryList from './components/RepositoryList';
import store from './store';

const App:React.FC = () => (
  <Provider store={store}>
    {/* <RepositoryList /> */}
    <Header />
    <Form />
    {/* <Grid /> */}
  </Provider>
);

export default App;
