import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [ favourite, setFavourite ] = useState(false);

  const handleClick = () => favourite === false ? setFavourite(true) : setFavourite(false);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;