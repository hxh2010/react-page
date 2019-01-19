import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/router'
import {Provider} from 'react-redux';
import {store, persistor} from './store/index';
import * as serviceWorker from './serviceWorker';
import './common/styl/index.styl'
import {PersistGate} from 'redux-persist/integration/react'
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router/>
      </PersistGate>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
