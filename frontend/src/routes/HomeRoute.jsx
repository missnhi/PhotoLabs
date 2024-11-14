import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar.jsx";
import PhotoList from "../components/PhotoList.jsx";

/*
HomeRoute.jsx,received the favPhotos and toggleFavourite as props ' +
'and passed them down to the PhotoList component.
=> good practice as it allows the PhotoList component to use these
props without having to manage its own state.
*/
const HomeRoute = ({ photos, topics, openModal, favPhotos, toggleFavourite, fetchPhotosByTopic }) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={favPhotos.length > 0}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
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
