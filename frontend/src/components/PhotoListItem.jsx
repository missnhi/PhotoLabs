import React, {useContext} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton.jsx";
import { FavouriteContext } from "../contexts/FavouriteContext.jsx";

const PhotoListItem = ({ photo }) => {
  const { location, urls, user } = photo;
  const { favPhotos, addFavourite, removeFavourite } = useContext(FavouriteContext);
  
  const isFavourite = favPhotos.some((favPhoto) => favPhoto && favPhoto.id === photo.id);
  
  // allow users to mark photos as favourites.
  const handleFavouriteClick = () => isFavourite ?  removeFavourite(photo) : addFavourite(photo);

  
  return (
    <div className="photo-list__item">
      {/*Adding a Favourite Button*/}
      <PhotoFavButton isFavourite={isFavourite} onClick={handleFavouriteClick} />
      <img className="photo-list__image" src={urls.full} alt={`${user.username}'s photo`}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`${user.username}'s profile`}/>
        <div className="photo-list__user-info">
          <h2>{user.username}</h2>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
