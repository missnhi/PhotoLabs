import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton.jsx";


const PhotoListItem = ({ photo }) => {
  const { id, location, imageSource, username, profile } = photo;
  return (
    <div className="photo-list__item">
      {/*Adding a Favourite Button*/}
      <PhotoFavButton />
      <img className="photo-list__image" src={imageSource} alt={`${username}'s photo`}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`${username}'s profile`}/>
        <div className="photo-list__user-info">
          <h2>{username}</h2>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
