import React from 'react';
import './App.scss';
import HomeRoute from "./routes/HomeRoute.jsx";
import photos from './mocks/photos';
import topics from './mocks/topics';
import FavouriteProvider from './contexts/FavouriteContext';
import PhotoDetailsModal from "./routes/PhotoDetailsModal.jsx";


const App = () => {
  
  const [isModelOpen, setIsModelOpen] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);
  
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
      <div className="App">
        {/*Home Route will take the openModal function and the PhotoDetail need the closeModal*/}
        <HomeRoute photos={photos} topics={topics} openModal={openModal}/>
        { isModelOpen && <PhotoDetailsModal photo={selectedPhoto} closeModal={closeModal} /> }
      </div>
    </FavouriteProvider>
  );
};

export default App;
