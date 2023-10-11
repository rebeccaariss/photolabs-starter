import React from 'react';
import PhotoListItem from './PhotoListItem';
import Loading from './Loading';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { photos, favouritePhotos, showFavourites, showModal, displayType } = props;

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
      { filteredPhotos.map(photo => <PhotoListItem key={photo.id} sampleData={photo} favouritePhotos={favouritePhotos} showFavourites={showFavourites} showModal={showModal}/>) }
      {/* { filteredPhotos.map(photo => <Loading key={photo.id}/>) } */}
    </ul>
  );
};

export default PhotoList;
