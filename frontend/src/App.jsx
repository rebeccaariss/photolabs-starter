import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [ selectedPhoto, setSelectedPhoto ] = useState(null);
  const [ modalState, setModalState ] = useState(false);
  const [ favouritePhotos, setFavouritePhotos ] = useState([]);

  const renderModal = (id) => {
    setModalState(true);
    setSelectedPhoto(id);
  };

  const showModal = (id) => modalState ?
  setModalState(false)
  : renderModal(id);

  const showFavourites = (id) => favouritePhotos.includes(id) 
    ? setFavouritePhotos(favouritePhotos.filter(photoId => photoId !== id)) // if the id is 
    // already present in favouritePhotos array, this creates a new array with all photos that
    // do not match the id in question, effectively updating state.
    : setFavouritePhotos([...favouritePhotos, id]); // if the id is not yet included in the
    // favouritePhotos array, the spread operator (...) copies the existing state array and
    // re-establishes state with the existing values and the additional id on call to
    // showFavourites. (call comes from onClick handler in PhotoFavButton component).

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        favouritePhotos={favouritePhotos} 
        showFavourites={showFavourites} 
        showModal={showModal}/>
        
      { modalState && 
        <PhotoDetailsModal 
          photos={photos} 
          showModal={showModal} 
          selectedPhoto={selectedPhoto} 
          favouritePhotos={favouritePhotos} 
          showFavourites={showFavourites}/>
      }
    </div>
  );
};

export default App;
