import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar.jsx";
import PhotoList from "../components/PhotoList.jsx";
import useToggleFavourite from "../hooks/useToggleFavourite";

const HomeRoute = ({ photos, topics, openModal }) => {
  const { favPhotos, toggleFavourite } = useToggleFavourite();
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favPhotos.length > 0}/>
      <PhotoList
        photosList={photos}
        toggleFavourite={toggleFavourite}
        favourites={favPhotos}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
