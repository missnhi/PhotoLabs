// hooks/useToggleFavourite.js
import { useContext } from 'react';
import { FavouriteContext } from '../contexts/FavouriteContext.jsx';

const useToggleFavourite = () => {
  const { favPhotos, addFavourite, removeFavourite } = useContext(FavouriteContext);

  const toggleFavourite = (photo) => {
    const isFavourite = favPhotos.some((favPhoto) => favPhoto.id === photo.id);
    if (isFavourite) {
      removeFavourite(photo);
    } else {
      addFavourite(photo);
    }
  };

  return { favPhotos, toggleFavourite };
};

export default useToggleFavourite;