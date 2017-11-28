export default function photoStatus(state='PHOTO_IS_NOT_LOADED', action) {
  switch (action.type) {
    case 'SET_PHOTO_STATUS':
      return action.status;
    default:
      return state;
  };
};