import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from "../components/TopNavigationBar.jsx";
import PhotoList from "../components/PhotoList.jsx";

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar/>
      <PhotoList/>
    </div>
  );
};

export default HomeRoute;
