import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar.jsx";
import PhotoList from "../components/PhotoList.jsx";

const HomeRoute = ({ photos, topics, openModal, favPhotos, toggleFavourite }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favPhotos.length > 0}/>
      <PhotoList
        photosList={photos}
        toggleFavourite={toggleFavourite}
        favPhotos={favPhotos}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
