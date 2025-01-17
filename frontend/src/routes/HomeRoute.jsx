import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos, favouritePhotos, showFavourites, showModal, getPhotosByTopics } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotos={favouritePhotos} getPhotosByTopics={getPhotosByTopics}/>
      <PhotoList photos={photos} favouritePhotos={favouritePhotos} showFavourites={showFavourites} showModal={showModal}/>
    </div>
  );
};

export default HomeRoute;
