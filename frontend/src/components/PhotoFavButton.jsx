import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { id, favouritePhotos, showFavourites } = props;
  
  return (
    <div className="photo-list__fav-icon" onClick={() => showFavourites(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favouritePhotos.includes(id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;