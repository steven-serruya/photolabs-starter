import React from 'react';
import PhotoListItem from 'components/PhotoListItem';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, photo, favourites, toggleFavourite }) => {
  console.log(photo);

  return (

    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={() => onClose(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <br></br>

      <img src={photo.urls.regular} alt={`Photo by ${photo.user.username}`} className="photo-details-modal__image" />
      <div className="photo-details-modal__images">
        {Object.values(photo.similar_photos).map((similarPhoto, index) => (
          <PhotoListItem
            key={similarPhoto.id}
            id={similarPhoto.id}
            location={similarPhoto.location}
            imageSource={similarPhoto.urls.regular}
            username={similarPhoto.user.username}
            profile={similarPhoto.user.profile}
            isFav={favourites.includes(similarPhoto.id)}
            toggleFavourite={toggleFavourite}
            photo={similarPhoto}
          />
        ))}
      </div>

    </div>
  );
};

export default PhotoDetailsModal;
