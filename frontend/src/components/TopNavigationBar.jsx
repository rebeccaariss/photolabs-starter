import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, favouritePhotos, getPhotosByTopics } = props;
  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopics={getPhotosByTopics}/>
      <FavBadge isFavPhotoExist={favouritePhotos.length > 0}/>
    </nav>
  )
}

export default TopNavigation;