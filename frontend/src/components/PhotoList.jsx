import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, favouritePhotos, showFavourites, showSelected } = props;
  return (
    <ul className="photo-list">
      { photos.map(photo => <PhotoListItem key={photo.id} sampleData={photo} favouritePhotos={favouritePhotos} showFavourites={showFavourites} showSelected={showSelected}/>) }
    </ul>
  );
};

export default PhotoList;
