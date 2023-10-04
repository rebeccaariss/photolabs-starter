import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos, favouritePhotos, showFavourites, showModal, getPhotosByTopics, getPhotosByFavourites, showFavouritesView } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotos={favouritePhotos} getPhotosByTopics={getPhotosByTopics} getPhotosByFavourites={getPhotosByFavourites} showFavouritesView={showFavouritesView}/>
      <PhotoList photos={photos} favouritePhotos={favouritePhotos} showFavourites={showFavourites} showModal={showModal} displayType="all"/>
    </div>
  );
};

export default HomeRoute;
