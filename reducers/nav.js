import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('List'));

export default function nav(state = initialState, action) {
  let nextState;

  switch (action.type) {
    case 'Photo':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Photo', params: {url: action.url } }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  };

  return nextState;
};
