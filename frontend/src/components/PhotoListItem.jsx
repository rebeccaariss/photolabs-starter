import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.sampleData;

  return (
    <article key={id}>
      <img src={imageSource} id="main-photo" />
      <div>
        <img src={profile} id="user-photo" />
        <p>{username}</p>
        <p>{location.city}, {location.country}</p>
      </div>
    </article>
  );
};

export default PhotoListItem;
