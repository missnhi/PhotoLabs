import React, {useContext, useState} from 'react';
import './App.scss';
import HomeRoute from "./routes/HomeRoute.jsx";
import photos from './mocks/photos';
import topics from './mocks/topics';
import FavouriteProvider, { FavouriteContext } from './contexts/FavouriteContext';
import PhotoDetailsModal from "./routes/PhotoDetailsModal.jsx";


const App = () => {
  
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  // Function to open + close the PhotoDetailsModal with useState
  // + set the selected photo by ID
  const openModal = (photoID) => {
    setIsModelOpen(true);
    const photo = photos.find((photo) => photo.id === photoID);
    setSelectedPhoto(photo);
  };
  
  const closeModal = () => {
    setIsModelOpen(false);
    setSelectedPhoto(null);
  };
  
  return (
    <FavouriteProvider>
      <FavouriteContext.Consumer>
        {({ favPhotos, toggleFavourite }) => (
          <div className="App">
            {/*Home Route will take the openModal function and the PhotoDetail need the closeModal*/}
            <HomeRoute
              photos={photos}
              topics={topics}
              openModal={openModal}
              favPhotos={favPhotos}
              toggleFavourite={toggleFavourite}
            />
            { isModelOpen && (
              <PhotoDetailsModal
                photo={selectedPhoto}
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
