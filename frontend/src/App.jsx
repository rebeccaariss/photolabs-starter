import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [ selectedPhoto, setSelectedPhoto ] = useState(null);
  const showSelected = (id) => selectedPhoto === id ?
  setSelectedPhoto(null)
  : setSelectedPhoto(id);

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} showSelected={showSelected}/>
      {selectedPhoto && <PhotoDetailsModal photos={photos} showSelected={showSelected} selectedPhoto={selectedPhoto}/>}
    </div>
  );
};

export default App;
