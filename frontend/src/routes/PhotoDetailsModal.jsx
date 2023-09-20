import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { photos, showModal, selectedPhoto, favouritePhotos, showFavourites } = props;
  const modalPhoto = photos.filter(photo => photo.id === selectedPhoto);

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={() => showModal(null)}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__images">
        <PhotoFavButton id={modalPhoto[0].id} favouritePhotos={favouritePhotos} showFavourites={showFavourites}/>
        <img src={modalPhoto[0].urls.full} className="photo-details-modal__image" alt="selected-photo"/>
      </div>

      <div className="photo-details-modal__photographer-details">
        <img src={modalPhoto[0].user.profile} className="photo-list__user-profile" alt="profile-picture"/>
        <div className="photo-list__user-info">
          <p>{modalPhoto[0].user.name}</p>
          <p className="photo-list__user-location">{modalPhoto[0].location.city}, {modalPhoto[0].location.country}</p>
        </div>
      </div>

      <h3>Similar Photos</h3>

      <PhotoList className="photo-details-modal__similar-images" photos={photos} favouritePhotos={favouritePhotos} showFavourites={showFavourites}/>
    </div>
  )
};

export default PhotoDetailsModal;
