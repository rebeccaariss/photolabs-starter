import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title } = props.sampleData;

  return (
    <div className="topic-list__item">
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
