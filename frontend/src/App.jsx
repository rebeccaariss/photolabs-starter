import React from 'react';

import TopicList from 'components/TopicList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {
        new Array(3)
        .fill(sampleDataForPhotoListItem)
        .map((photo, index) => (
          <PhotoListItem key={index} sampleData={photo} />
        ))
      } */}
      <TopicList />
    </div>
  );
};

export default App;
