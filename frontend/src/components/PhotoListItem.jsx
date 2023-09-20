import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.sampleData;
  const { favouritePhotos, showFavourites } = props; // state management props for favourites
  const { showModal } = props; // state management prop (function) for modal

  return (
    <li id={id} className="photo-list__item">
      <PhotoFavButton id={id} favouritePhotos={favouritePhotos} showFavourites={showFavourites}/>
      <img src={urls.regular} className="photo-list__image" alt="main-photo" onClick={() => showModal(id)}/>
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
