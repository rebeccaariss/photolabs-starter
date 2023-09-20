import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {
  const { photos, showSelected, selectedPhoto } = props;
  const modalPhoto = photos.filter(photo => photo.id === selectedPhoto);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => showSelected(null)}/>
      </button>
      {console.log(modalPhoto[0])}
    </div>
  )
};

export default PhotoDetailsModal;
