import React, { useContext } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem.jsx";
import useToggleFavourite from "../hooks/useToggleFavourite.js";

const PhotoList = ({photosList, openModal}) => {
  const { favPhotos, toggleFavourite} = useToggleFavourite();
  
  return (
    <ul className="photo-list">
      {photosList.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={toggleFavourite}
          favourites={favPhotos}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
