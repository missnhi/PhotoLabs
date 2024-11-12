import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({id, location, imageSource,username, profile}) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`${username}'s photo`}/>
      <div className="photo-details">
        <h2>{username}</h2>
        <p>{location.city}, {location.country}</p>
        <img src={profile} alt={`${username}'s profile`} />
      </div>
    </div>
  );
};

export default PhotoListItem;
