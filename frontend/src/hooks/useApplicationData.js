import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};

function reducer(state, action) {
  switch (action.type) {

    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favouritePhotos: [...state.favouritePhotos, action.payload]
      };
      
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.filter(
          (photoId) => photoId !== action.payload
        )
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        modalState: action.payload
      };

    case ACTIONS.SET_PHOTO_DATA:
      return { 
        ...state, 
        photoData: action.payload 
      };

    case ACTIONS.SET_TOPIC_DATA:
      return { 
        ...state, 
        topicData: action.payload 
      };

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

function useApplicationData() {
  const [ state, dispatch ] = useReducer(reducer, {
    selectedPhoto: null,
    modalState: false,
    favouritePhotos: [],
    photoData: [],
    topicData: []
  });

  useEffect(() => {
    fetch(`/api/photos`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch(`/api/topics`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  console.log(process.env.REACT_APP_API_SERVER);

  const renderModal = (id) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: id });
  };

  const showModal = (id) => {
    if (state.modalState === true) {
      dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
    } else {
      renderModal(id);
    }
  };

  const showFavourites = (id) => {
    if (state.favouritePhotos.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id }); // if the id is 
      // already present in favouritePhotos array, this creates a new array with all photos that
      // do not match the id in question, effectively updating state.
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id }); // if the id is not yet included in the
      // favouritePhotos array, the spread operator (...) copies the existing state array and
      // re-establishes state with the existing values and the additional id on call to
      // showFavourites. (call comes from onClick handler in PhotoFavButton component).
    }
  };

  return {
    state,
    showModal,
    showFavourites
  };
};

export default useApplicationData;