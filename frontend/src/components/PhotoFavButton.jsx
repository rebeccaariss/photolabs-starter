import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { id, favouritePhotos, showFavourites } = props;

  return (
    // For each photo's favourite button, we call showFavourites state management function
    // to determine whether the button should be toggled on or off:
    <div className="photo-list__fav-icon" onClick={() => showFavourites(id)}>
      <div className="photo-list__fav-icon-svg">
        {/* "selected" prop for FavIcon component tells the component if our state (favouritePhotos array) includes the photo id:  */}
        <FavIcon selected={favouritePhotos.includes(id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;