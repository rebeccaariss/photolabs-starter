import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state: { 
      selectedPhoto, 
      modalState, 
      favouritePhotos 
    },
    showModal,
    showFavourites
  } = useApplicationData();

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
