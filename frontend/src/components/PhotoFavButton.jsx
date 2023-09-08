import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photoId, toggleFavourite, isFav }) => {
  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourite(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav} />
      </div>
    </div>
  );
};

export default PhotoFavButton;