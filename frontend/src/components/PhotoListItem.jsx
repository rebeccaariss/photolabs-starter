import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.sampleData;

  return (
    <li id={id} className="photo-list__item">
      <PhotoFavButton />
      <img src={urls.regular} className="photo-list__image" alt="main-photo"/>
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
