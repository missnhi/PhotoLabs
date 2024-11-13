import React, {useContext} from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton.jsx";

const PhotoListItem = ({ photo, openModal, favPhotos, toggleFavourite }) => {
  const { location, urls, user } = photo;
  
  // check if the current photo is a favourite.
  const isFavourite = favPhotos.some((favPhoto) => favPhoto && favPhoto.id === photo.id);
  
  // allow users to mark photos as favourites.
  const handleFavouriteClick = () => toggleFavourite(photo);
  
  return (
    <div className="photo-list__item" >
      {/*Adding a Favourite Button*/}
      <PhotoFavButton isFavourite={isFavourite} onClick={handleFavouriteClick} />
      <img className="photo-list__image"
           onClick={() => openModal(photo.id)}
           src={urls.full} alt={`${user.username}'s photo`}/>
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
