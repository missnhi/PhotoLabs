import { useState, useReducer } from 'react';
import photos from '../mocks/photos';

export const ACTIONS = {
  SET_PHOTOS: 'SET_PHOTOS',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTOS:
      return {...state, photos: action.payload};
    case ACTIONS.OPEN_MODAL:
      const selectedPhoto = state.photos.find((photo) => photo.id === action.payload);
      return {...state, isModelOpen: true, selectedPhoto: selectedPhoto};
    case ACTIONS.CLOSE_MODAL:
      return {...state, isModelOpen: false, selectedPhoto: null};
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }
  };


const useApplicationData = () => {
  // Initialize state with default values
  const [state, dispatch] = useReducer(reducer, {
    isModelOpen: false,
    selectedPhoto: null,
    photos: photos,
  });
  
  // Set the selected photo and open the modal
  const openModal = (photoID) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photoID });
  };

  // Close the modal and clear the selected photo
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  // Return the state and actions
  return {
    state,
    openModal,
    closeModal,
  };
};

export default useApplicationData;