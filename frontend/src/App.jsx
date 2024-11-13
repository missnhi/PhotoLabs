import React, {useContext, useState} from 'react';
import './App.scss';
import HomeRoute from "./routes/HomeRoute.jsx";
import photos from './mocks/photos';
import topics from './mocks/topics';
import FavouriteProvider, { FavouriteContext } from './contexts/FavouriteContext';
import PhotoDetailsModal from "./routes/PhotoDetailsModal.jsx";
import useApplicationData from "./hooks/useApplicationData.js";


const App = () => {
  
  const {
    state,
    openModal,
    closeModal,
  } = useApplicationData();
  
  return (
    <FavouriteProvider>
      <FavouriteContext.Consumer>
        {/*Pass favPhotos List and the toggle Favourite function to all the children
        so that they can use it across all state, globally*/}
        {({ favPhotos, toggleFavourite }) => (
          <div className="App">
            {/*Home Route will take the openModal function and the PhotoDetail need the closeModal*/}
            <HomeRoute
              photos={state.photos}
              topics={topics}
              openModal={openModal}
              favPhotos={favPhotos}
              toggleFavourite={toggleFavourite}
            />
            { state.isModelOpen && (
              <PhotoDetailsModal
                photo={state.selectedPhoto}
                closeModal={closeModal}
                favPhotos={favPhotos}
                toggleFavourite={toggleFavourite}
              />
            )}
          </div>
        )}
      </FavouriteContext.Consumer>
    </FavouriteProvider>
  );
};

export default App;
