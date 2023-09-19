import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

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
      <HomeRoute topics={topics} photos={photos}/>
    </div>
  );
};

export default App;
