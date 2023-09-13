// Import required modules and components

import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

// PhotoDetailsModal component to display details of a selected photo

const PhotoDetailsModal = ({ onClose, photo, favourites, toggleFavourite, id, isFav, toggleModal }) => {
  const handleToggleFavourite = () => {
    toggleFavourite(id);

  };

  return (

    <div className="photo-details-modal">

      {/* Button to close the modal */}
      <div className="photo-details-modal__top-bar">


        <button className="photo-details-modal__close-button" onClick={() => onClose(null)}>
          <img src={closeSymbol} alt="close symbol" />
        </button>


      </div>

      {/* Display the selected photo */}
      <div className="photo-details-modal__images">
        <PhotoFavButton
          photoId={id}
          isFav={isFav}
          toggleFavourite={handleToggleFavourite}
          onClick={() => toggleFavourite(photo.id)}
          toggleModal={toggleModal}
        />
        <img src={photo.urls.regular} alt={`Photo by ${photo.user.username}`} className="photo-details-modal__image" />
      </div>



      <div className="photo-details-modal__photographer-details">
        <div className="profile-picture">
          <img src={photo.user.profile} alt={`Profile ${id}`} className="photo-list__user-profile" />
        </div>
        <div className="photo-list__user-info">{photo.user.username}
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>


      </div>
      {/* Display similar photos in a list */}

      <div className="photo-details-modal__images">

        <PhotoList
          photoData={Object.values(photo.similar_photos)}


          favourites={favourites}
          toggleFavourite={toggleFavourite}

        />


      </div>

    </div>
  );
};

export default PhotoDetailsModal;
