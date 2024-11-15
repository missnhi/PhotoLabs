import { useState, useReducer, useEffect } from 'react';
import axios from "axios";
export const ACTIONS = {
  SET_PHOTOS: 'SET_PHOTOS', // Set the photos that is currently being displayed
  SET_TOPICS: 'SET_TOPICS', // Set the topics that is currently being displayed
  OPEN_MODAL: 'OPEN_MODAL', // Open the modal based on the selected photo
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTOS_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC', // Set the photos based on the selected topic
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTOS:
      return {...state, photos: action.payload};
    case ACTIONS.SET_TOPICS:
      return { ...state, topics: action.payload };
    case ACTIONS.OPEN_MODAL:
      const selectedPhoto = state.photos.find((photo) => photo.id === action.payload);
      return {...state, isModelOpen: true, selectedPhoto: selectedPhoto};
    case ACTIONS.CLOSE_MODAL:
      return {...state, isModelOpen: false, selectedPhoto: null};
    case ACTIONS.SET_PHOTOS_BY_TOPIC:
      return {...state, photos: action.payload};
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }
  }


const useApplicationData = () => {
  // Initialize state with default values
  const [state, dispatch] = useReducer(reducer, {
    isModelOpen: false,
    selectedPhoto: null,
    photos: [],
    topics: [],
  });
  
  // Fetch photos and topics from the API
  useEffect(() => {
    axios.get("/api/photos")
      .then((res) => {
        dispatch({ type: ACTIONS.SET_PHOTOS, payload: res.data });
      })
      .catch((err) => console.log(err));
    
    axios.get("/api/topics")
      .then((res) => {
        dispatch({ type: ACTIONS.SET_TOPICS, payload: res.data });
      })
      .catch((err) => console.log(err));
  }, []);
  
  
  // Set the selected photo and open the modal
  const openModal = (photoID) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photoID });
  };

  // Close the modal and clear the selected photo
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };
  
  // New function to fetch photos by topic ex: NAture, People, Travel, Animals, Fashion
  const fetchPhotosByTopic = (topicID) => {
    axios.get(`api/topics/photos/${topicID}`)
      .then((res) => {
        dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
  

  // Return the state and actions
  return {
    state,
    openModal,
    closeModal,
    fetchPhotosByTopic,
  };
};

export default useApplicationData;