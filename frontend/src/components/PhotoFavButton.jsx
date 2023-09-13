import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ selected, displayAlert, onClick }) => {

  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} displayAlert={displayAlert} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
