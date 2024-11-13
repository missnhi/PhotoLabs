import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from "../components/PhotoList.jsx";
import PhotoListItem from "../components/PhotoListItem.jsx";
const PhotoDetailsModal = ({photo, closeModal}) => {
  console.log(photo);
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoListItem className=".photo-details-modal__image" photo={photo} openModal={() => {}} />
      <h3 className="photo-details-modal__header">Similar Photos</h3>
      <PhotoList photosList={Object.values(photo.similar_photos)} openModal={() => {}} />
    </div>
  )
};

export default PhotoDetailsModal;
