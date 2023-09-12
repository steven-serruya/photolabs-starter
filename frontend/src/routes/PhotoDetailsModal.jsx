// Import required modules and components

import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

// PhotoDetailsModal component to display details of a selected photo

const PhotoDetailsModal = ({ onClose, photo, favourites, toggleFavourite }) => {


  return (

    <div className="photo-details-modal">

      {/* Button to close the modal */}

      <button className="photo-details-modal__close-button" onClick={() => onClose(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <br></br>

      {/* Display the selected photo */}

      <img src={photo.urls.regular} alt={`Photo by ${photo.user.username}`} className="photo-details-modal__image" />

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
