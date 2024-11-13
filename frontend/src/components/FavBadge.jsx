import React, {useContext} from 'react';
import { FavouriteContext } from '../contexts/FavouriteContext';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ( ) => {
  const {favPhotos} = useContext(FavouriteContext);
  const isFavPhotoExist = favPhotos.length > 0;
  
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;