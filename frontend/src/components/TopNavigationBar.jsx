import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, favouritePhotos, getPhotosByTopics, getPhotosByFavourites, showFavouritesView } = props;
  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopics={getPhotosByTopics}/>
      <FavBadge isFavPhotoExist={favouritePhotos.length > 0} getPhotosByFavourites={getPhotosByFavourites} favouritePhotos={favouritePhotos} showFavouritesView={showFavouritesView}/>
    </nav>
  )
}

export default TopNavigation;