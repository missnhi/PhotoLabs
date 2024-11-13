import React, {createContext, useState} from "react";

export const FavouriteContext = createContext();
export default function FavouriteProvider ({children}) {
  const [favPhotos, setFavPhotos] = useState([]);
  
  const toggleFavourite = (photo) => {
    setFavPhotos((prevFavPhotos) => {
      if (prevFavPhotos.some((favPhoto) => favPhoto.id === photo.id)) {
        return prevFavPhotos.filter((favPhoto) => favPhoto.id !== photo.id);
      } else {
        return [...prevFavPhotos, photo];
      }
    });
  };
  
  return (
    <FavouriteContext.Provider value={{ favPhotos,toggleFavourite }}>
      {children}
    </FavouriteContext.Provider>
  )
}