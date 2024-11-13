import React from 'react';

import './App.scss';

import PhotoList from "./components/PhotoList.jsx";
import TopicList from "./components/TopicList.jsx";


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <>
      <div className="App">
        <TopicList/>
        <PhotoList />
      </div>
    </>
  );
};

export default App;
