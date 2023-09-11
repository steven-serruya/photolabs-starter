import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ onClose, photo, favourites, toggleFavourite }) => {
  console.log('photo+++', photo);


  console.log('objects+++', Object.values(photo.similar_photos));
  return (

    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={() => onClose(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <br></br>

      <img src={photo.urls.regular} alt={`Photo by ${photo.user.username}`} className="photo-details-modal__image" />


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
