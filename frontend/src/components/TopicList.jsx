import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {
  const { topics, getPhotosByTopics } = props;
  return (
    <div className="top-nav-bar__topic-list">
      { topics.map(topic => <TopicListItem key={topic.id} title={topic.title} getPhotosByTopics={getPhotosByTopics} topic={topic.id}/>) }
    </div>
  );
};

export default TopicList;
