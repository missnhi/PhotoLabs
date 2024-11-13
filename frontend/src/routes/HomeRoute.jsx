import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar.jsx";
import PhotoList from "../components/PhotoList.jsx";

const HomeRoute = ({ photos, topics }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photosList={photos}/>
    </div>
  );
};

export default HomeRoute;
