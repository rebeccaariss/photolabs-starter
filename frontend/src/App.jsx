import React from 'react';

import PhotoList from './components/PhotoList';
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
      <PhotoList />
    </div>
  );
};

export default App;
