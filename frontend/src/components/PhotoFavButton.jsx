import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import useWow from '../mocks/useWowHook';

function PhotoFavButton({ isFavourite, onClick }) {
  const {sayWow} = useWow();
  
  const handleClick = () => {
    onClick();
    if (!isFavourite) {
      sayWow();
    }
  };
  
  // The isActive state is toggled when the button is clicked.
  // The className of the div is conditionally set to
  // either photo-list__fav-icon-svg or photo-list__fav-icon based
  // on the isActive state.
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite}/>
      </div>
    </div>
    
    //somehow that this below doesn't work
  // <div className={isActive ? 'photo-list__fav-icon-svg' : 'photo-list__fav-icon'} onClick={handleClick}>
  //   <FavIcon selected={isActive}/>
  // </div>
  );
}

export default PhotoFavButton;