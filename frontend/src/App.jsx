import React from 'react';

import './App.scss';
import HomeRoute from "./routes/HomeRoute.jsx";
import photos from './mocks/photos';
import topics from './mocks/topics';
import FavouriteProvider from './contexts/FavouriteContext';


const App = () => {
  return (
    <FavouriteProvider>
      <div className="App">
        <HomeRoute photos={photos} topics={topics}/>
      </div>
    </FavouriteProvider>
  );
};

export default App;
