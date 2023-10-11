import React from 'react';
import PhotoListItem from './PhotoListItem';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <Skeleton variant="rounded" width={210} height={60} />
  );
};

export default Loading;
// test