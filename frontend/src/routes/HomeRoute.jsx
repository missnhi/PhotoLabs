import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar.jsx";
import PhotoList from "../components/PhotoList.jsx";
import useToggleFavourite from "../hooks/useToggleFavourite";

const HomeRoute = ({ photos, topics }) => {
  const { favPhotos, toggleFavourite } = useToggleFavourite();
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList
        photosList={photos}
        toggleFavourite={toggleFavourite}
        favourites={favPhotos}
      />
    </div>
  );
};

export default HomeRoute;
