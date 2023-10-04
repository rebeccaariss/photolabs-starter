import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state: { 
      selectedPhoto, 
      modalState, 
      favouritePhotos,
      photoData,
      topicData
    },
    showModal,
    showFavourites,
    getPhotosByTopics,
    getPhotosByFavourites
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        topics={topicData} 
        photos={photoData} 
        favouritePhotos={favouritePhotos} 
        showFavourites={showFavourites} 
        showModal={showModal}
        getPhotosByTopics={getPhotosByTopics}
        getPhotosByFavourites={getPhotosByFavourites}
      />
      { modalState && 
        <PhotoDetailsModal 
          photos={photoData} 
          showModal={showModal} 
          selectedPhoto={selectedPhoto} 
          favouritePhotos={favouritePhotos} 
          showFavourites={showFavourites}
        />
      }
    </div>
  );
};

export default App;
