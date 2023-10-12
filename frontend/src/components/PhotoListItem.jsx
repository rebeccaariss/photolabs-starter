import React, { useState, useEffect } from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import Loading from './Loading';

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.sampleData;
  const { favouritePhotos, showFavourites } = props;
  const { showModal } = props;

  const [ photosAvailable, setPhotosAvailable ] = useState(false);

  // Function runs when PhotoList component mounts:
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhotosAvailable(true);
    }, 3000);

    return () => clearTimeout(timeout); // Clear if component unmounts
  });

  return (
    <li id={id} className="photo-list__item">
      <PhotoFavButton id={id} favouritePhotos={favouritePhotos} showFavourites={showFavourites}/>
      
      { photosAvailable ? 
        <img src={urls.regular} className="photo-list__image" alt="main-photo" onClick={() => showModal(id)}/>
        :
        <Loading className="photo-list__image" alt="main-photo-loading"/>
      }

      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile" alt="profile-picture"/>
        <div className="photo-list__user-info">
          <p>{user.name}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
