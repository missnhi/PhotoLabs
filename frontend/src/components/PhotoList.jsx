import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem.jsx";

const PhotoList = ({photosList}) => {
  console.log("In PhotoList.jsx, photosList: ", photosList);
  return (
    <ul className="photo-list">
      {photosList.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
