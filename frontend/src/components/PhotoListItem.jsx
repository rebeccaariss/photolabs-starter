import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.sampleData;

  return (
    <article id={id} className="photo-list__item">
      <img src={imageSource} className="photo-list__image" alt="main-photo"/>
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" alt="profile-picture"/>
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
