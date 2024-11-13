import React, {createContext, useState} from "react";

export const FavouriteContext = createContext();
export default function FavouriteProvider ({children}) {
  const [favPhotos, setFavPhotos] = useState([]);
  
  const addFavourite = (photo) => {
    setFavPhotos([...favPhotos, photo]);
  }
  
  const removeFavourite = (photo) => {
    setFavPhotos(favPhotos.filter((favPhoto) => favPhoto.id !== photo.id));
  }
  
  return (
    <FavouriteContext.Provider value={{favPhotos, addFavourite, removeFavourite}}>
      {children}
    </FavouriteContext.Provider>
  )
}