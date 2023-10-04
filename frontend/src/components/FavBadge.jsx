import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, getPhotosByFavourites, favouritePhotos, showFavouritesView }) => {
  return (
    <div className='fav-badge' onClick={() => showFavouritesView()}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;