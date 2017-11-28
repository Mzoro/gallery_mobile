import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import AppWithNavigationState from './AppNavigator';

class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Setup;
