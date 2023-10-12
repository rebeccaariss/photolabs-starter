import React from 'react';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

// import '../styles/PhotoListItem.scss';
// Next steps: how to apply CSS styles to MUI skeleton components

const Loading = () => {
  return (
    <Skeleton variant="rounded" width={300} height={200}/>
  );
};

export default Loading;