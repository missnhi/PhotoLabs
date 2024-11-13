import React, { useContext } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem.jsx";


const PhotoList = ({photosList, openModal, favPhotos, toggleFavourite}) => {
  
  return (
    <ul className="photo-list">
      {photosList.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={toggleFavourite}
          favPhotos={favPhotos}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
