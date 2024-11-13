import React from 'react';

import './App.scss';

import PhotoList from "./components/PhotoList.jsx";
import TopicList from "./components/TopicList.jsx";
import TopNavigationBar from "./components/TopNavigationBar.jsx";


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <>
      <div className="App">
        <TopNavigationBar />
        <PhotoList />
      </div>
    </>
  );
};

export default App;
