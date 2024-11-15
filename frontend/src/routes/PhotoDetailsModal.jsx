import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from "../components/PhotoList.jsx";
import PhotoListItem from "../components/PhotoListItem.jsx";
const PhotoDetailsModal = ({photo, closeModal, favPhotos, toggleFavourite}) => {
  if (!photo) return null;
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem
        className="photo-details-modal__image"
        photo={photo}
        openModal={() => {}}
        favPhotos={favPhotos}
        toggleFavourite={toggleFavourite}
      />
      <h3 className="photo-details-modal__header">Similar Photos</h3>
      <PhotoList
        photosList={Object.values(photo.similar_photos)}
        favPhotos={favPhotos}
        toggleFavourite={toggleFavourite}
      />
    </div>
  )
};

export default PhotoDetailsModal;
