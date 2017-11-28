export default function photos(state=[], action) {
  switch (action.type) {
    case 'LOAD_PHOTOS':
      return [...state, ...action.photos];
    default:
      return state;
  };
};