import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { photos, showModal, selectedPhoto, favouritePhotos, showFavourites } = props;
  const modalPhoto = photos.find(photo => photo.id === selectedPhoto);
  const similarPhotos = Object.values(modalPhoto.similar_photos);

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={() => showModal(null)}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__images">
        <PhotoFavButton id={modalPhoto.id} favouritePhotos={favouritePhotos} showFavourites={showFavourites}/>
        <img src={modalPhoto.urls.full} className="photo-details-modal__image" alt="selected-photo"/>
      </div>

      <div className="photo-details-modal__header photo-details-modal__photographer-details">
        <img src={modalPhoto.user.profile} className="photo-list__user-profile" alt="profile-picture"/>
        <div className="photo-list__user-info">
          <p>{modalPhoto.user.name}</p>
          <p className="photo-list__user-location">{modalPhoto.location.city}, {modalPhoto.location.country}</p>
        </div>
      </div>

      <div className="photo-details-modal__images">
        <h3>Similar Photos</h3>
        <PhotoList photos={similarPhotos} favouritePhotos={favouritePhotos} showFavourites={showFavourites} showModal={showModal}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
