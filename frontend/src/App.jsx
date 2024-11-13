import React from 'react';
import './App.scss';
import HomeRoute from "./routes/HomeRoute.jsx";
import photos from './mocks/photos';
import topics from './mocks/topics';
import FavouriteProvider from './contexts/FavouriteContext';
import PhotoDetailsModal from "./routes/PhotoDetailsModal.jsx";


const App = () => {
  
  const [isModelOpen, setIsModelOpen] = React.useState(false);
  
  const openModal = () => {
    setIsModelOpen(true);
  };
  
  const closeModal = () => {
    setIsModelOpen(false);
  };
  
  return (
    <FavouriteProvider>
      <div className="App">
        {/*Home Route will take the openModal function and the PhotoDetail need the closeModal*/}
        <HomeRoute photos={photos} topics={topics} openModal={openModal}/>
        { isModelOpen && <PhotoDetailsModal closeModal={closeModal} /> }
      </div>
    </FavouriteProvider>
  );
};

export default App;
