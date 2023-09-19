import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { topics, photos } = props;

  const [ favouritePhotos, setFavouritePhotos ] = useState([]);
  const showFavourites = (id) => favouritePhotos.includes(id) 
    ? setFavouritePhotos(favouritePhotos.filter(photoId => photoId !== id)) // if the id is 
    // already present in favouritePhotos array, this creates a new array with all photos that
    // do not match the id in question, effectively updating state.
    : setFavouritePhotos([...favouritePhotos, id]); // if the id is not yet included in the
    // favouritePhotos array, the spread operator (...) copies the existing state array and
    // re-establishes state with the existing values and the additional id on call to
    // showFavourites. (call comes from onClick handler in PhotoFavButton component).

  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos} favouritePhotos={favouritePhotos} showFavourites={showFavourites}/>
    </div>
  );
};

export default HomeRoute;
