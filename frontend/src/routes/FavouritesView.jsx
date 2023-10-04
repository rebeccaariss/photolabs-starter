import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const FavouritesView = (props) => {
  const { topics, photos, favouritePhotos, showFavourites, showModal, getPhotosByTopics, getPhotosByFavourites } = props;

  return (
    <div className="favourites-view">
      <TopNavigation topics={topics} favouritePhotos={favouritePhotos} getPhotosByTopics={getPhotosByTopics} getPhotosByFavourites={getPhotosByFavourites}/>
      <h2>Favourite Photos</h2>
      <PhotoList photos={photos} favouritePhotos={favouritePhotos} showFavourites={showFavourites} showModal={showModal} displayType="favourites"/>
    </div>
  );
};

export default FavouritesView;