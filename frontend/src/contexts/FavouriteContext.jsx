import React, {createContext, useState} from "react";

export const FavouriteContext = createContext();
export default function FavouriteProvider ({children}) {
  const [favPhotos, setFavPhotos] = useState([]);
  
  const addFavourite = (photo) => {
    // console.log("In FavouriteProvider.jsx, addFavourite, photo ", photo);
    setFavPhotos([...favPhotos, photo]);
  }
  
  const removeFavourite = (photo) => {
    // console.log("In FavouriteProvider.jsx, removeFavourite, photo: ", photo);
    setFavPhotos(favPhotos.filter((favPhoto) => favPhoto.id !== photo.id));
  }
  
  return (
    <FavouriteContext.Provider value={{favPhotos, addFavourite, removeFavourite}}>
      {children}
    </FavouriteContext.Provider>
  )
}