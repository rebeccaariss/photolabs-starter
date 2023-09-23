import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, getPhotosByTopics, topic } = props;

  return (
    <div className="topic-list__item" onClick={() => getPhotosByTopics(topic)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
