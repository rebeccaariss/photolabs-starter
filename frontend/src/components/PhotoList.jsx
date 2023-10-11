import React, { useState, useEffect } from 'react';
import PhotoListItem from './PhotoListItem';
import Loading from './Loading';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { photos, favouritePhotos, showFavourites, showModal, displayType } = props;
  const [ photosAvailable, setPhotosAvailable ] = useState(false);

  // Function runs when PhotoList component mounts:
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhotosAvailable(true);
    }, 3000);

    return () => clearTimeout(timeout); // Clear if component unmounts
  });

  const filterPhotos = () => {
    if (displayType === "favourites") {
      return photos.filter((photo) => favouritePhotos.includes(photo.id));
    } else {
      return photos;
    }
  };

  const filteredPhotos = filterPhotos();
  
  return (
    <ul className="photo-list">
      { photosAvailable ? (
        filteredPhotos.map(photo => <PhotoListItem key={photo.id} sampleData={photo} favouritePhotos={favouritePhotos} showFavourites={showFavourites} showModal={showModal}/>)
      ) : (
        filteredPhotos.map(photo => <Loading key={photo.id}/>)
      )}
    </ul>
  );
};

export default PhotoList;
