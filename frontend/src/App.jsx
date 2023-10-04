import React from 'react';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import FavouritesView from 'routes/FavouritesView';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state: { 
      selectedPhoto, 
      modalState, 
      favouritePhotos,
      photoData,
      topicData,
      favouritesViewState
    },
    showModal,
    showFavourites,
    getPhotosByTopics,
    getPhotosByFavourites,
    showFavouritesView
  } = useApplicationData();

  return (
    <div className="App">
      { favouritesViewState ? 
        <FavouritesView 
          favouritePhotos={favouritePhotos}
          showFavourites={showFavourites}
          showModal={showModal}
        />
        :
        <HomeRoute 
          topics={topicData} 
          photos={photoData} 
          favouritePhotos={favouritePhotos} 
          showFavourites={showFavourites} 
          showModal={showModal}
          getPhotosByTopics={getPhotosByTopics}
          getPhotosByFavourites={getPhotosByFavourites}
          showFavouritesView={showFavouritesView}
        />
      }
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
