export const setPage = number => {
  return {
    type: 'SET_PAGE',
    number
  };
};

export const fetchPhotosSuccess = photos => {
  return {
    type: 'LOAD_PHOTOS',
    photos
  };
};

export const setPhotoStatus = status => {
  return {
    type: 'SET_PHOTO_STATUS',
    status
  };
};

export const fetchPhotos = page => {

  let path = 'https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF';
  return dispatch => {
    dispatch(setPhotoStatus('PHOTO_IS_NOT_LOADED'));

    if (page != 1) {
      path += `&page=${page}`;
    }

    return fetch(path)
      .then(response => response.json())
      .then(json => {
          dispatch(setPage(page + 1));
          dispatch(setPhotoStatus('PHOTO_IS_LOADED'));
          dispatch(fetchPhotosSuccess(json.photos));
        })
      .catch(err => console.log(err));
  };
};