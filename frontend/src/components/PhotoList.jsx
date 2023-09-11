import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';




const PhotoList = ({ favourites, toggleFavourite, toggleModal, photoData }) => {
  return (
    <ul className="photo-list">
      {photoData.map((photoData) => {
        return (
          <PhotoListItem
            className="photo-list-item"
            key={photoData.id}
            id={photoData.id}
            location={photoData.location}
            imageSource={photoData.urls.regular}
            username={photoData.user.username}
            profile={photoData.user.profile}
            isFav={favourites.includes(photoData.id)}
            toggleFavourite={toggleFavourite}
            photo={photoData}
            toggleModal={toggleModal}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
