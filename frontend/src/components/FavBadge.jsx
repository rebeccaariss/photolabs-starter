import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, getPhotosByFavourites, favouritePhotos }) => {
  return (
    <div className='fav-badge' onClick={() => getPhotosByFavourites(favouritePhotos)}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;