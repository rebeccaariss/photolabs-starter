import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  GET_PHOTOS_BY_FAVOURITES: 'GET_PHOTOS_BY_FAVOURITES'
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

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { 
        ...state, 
        selectedTopic: action.payload 
      };

    case ACTIONS.GET_PHOTOS_BY_FAVOURITES:
      return {
        ...state,
        favouritePhotos: action.payload
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
    topicData: [],
    selectedTopic: null
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

  useEffect(() => {
    if (state.selectedTopic !== null) {
      fetch(`/api/topics/photos/${state.selectedTopic}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    }
  }, [state.selectedTopic]);

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
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
    }
  };

  const getPhotosByTopics = (topic) => {
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: topic });
  };

  const getPhotosByFavourites = (favouritePhotos) => {
    console.log("You passed the props correctly!")
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_FAVOURITES, payload: favouritePhotos })
    console.log(favouritePhotos)
  };

  return {
    state,
    showModal,
    showFavourites,
    getPhotosByTopics,
    getPhotosByFavourites
  };
};

export default useApplicationData;