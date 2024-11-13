import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    setIsActive(!isActive);
  };
  
  // The isActive state is toggled when the button is clicked.
  // The className of the div is conditionally set to
  // either photo-list__fav-icon-svg or photo-list__fav-icon based
  // on the isActive state.
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive}/>
      </div>
    </div>
    
    //somehow that this below doesn't work
  // <div className={isActive ? 'photo-list__fav-icon-svg' : 'photo-list__fav-icon'} onClick={handleClick}>
  //   <FavIcon selected={isActive}/>
  // </div>
  );
}

export default PhotoFavButton;