import React, { useState, useEffect } from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';
import Loading from './Loading';
import Skeleton from 'react-loading-skeleton';

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.sampleData;
  const { favouritePhotos, showFavourites } = props;
  const { showModal } = props;

  const [ photosAvailable, setPhotosAvailable ] = useState(false);

  // Function runs when PhotoList component mounts:
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhotosAvailable(true);
    }, 1000);

    return () => clearTimeout(timeout); // Clear if component unmounts
  });

  return (
    <li id={id} className="photo-list__item">
      { photosAvailable ?
        <div>
          <PhotoFavButton id={id} favouritePhotos={favouritePhotos} showFavourites={showFavourites}/>
          <img src={urls.regular} className="photo-list__image" alt="main-photo" onClick={() => showModal(id)}/>
          <div className="photo-list__user-details">
            <img src={user.profile} className="photo-list__user-profile" alt="profile-picture"/>
            <div className="photo-list__user-info">
              <p>{user.name}</p>
              <p className="photo-list__user-location">{location.city}, {location.country}</p>
            </div>
          </div>
        </div>
      :
        <div>
          <Loading alt="main-photo-loading"/>
          <div className="photo-list__user-details">
            <Skeleton alt="profile-picture-loading" variant="circular" width={40} height={40} borderRadius={100}/>
              <div>
                <Skeleton alt="user-info-loading" variant="text" sx={{ fontSize: "1rem" }} height={12} width={80}/>
                <Skeleton alt="user-location-loading" variant="text" sx={{ fontSize: "1rem" }} height={12} width={100}/>
              </div>
          </div>
        </div>
      }
    </li>
  );
};

export default PhotoListItem;
