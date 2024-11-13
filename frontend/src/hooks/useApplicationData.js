import { useState, useEffect } from 'react';
import photos from '../mocks/photos';

const useApplicationData = () => {
  // Initialize state with default values
  const [state, setState] = useState({
    isModelOpen: false,
    selectedPhoto: null,
    photos: []
  });

  // Load initial data from the API or mocks when the component mounts
  useEffect(() => {
    setState((prev) => ({ ...prev, photos }));
  }, []);
  

  // Set the selected photo and open the modal
  const openModal = (photoID) => {
    const photo = state.photos.find((photo) => photo.id === photoID);
    setState((prev) => ({ ...prev, isModelOpen: true, selectedPhoto: photo }));
  };

  // Close the modal and clear the selected photo
  const closeModal = () => {
    setState((prev) => ({ ...prev, isModelOpen: false, selectedPhoto: null }));
  };

  // Return the state and actions
  return {
    state,
    openModal,
    closeModal,
  };
};

export default useApplicationData;