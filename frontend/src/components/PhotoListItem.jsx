import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ id, location, imageSource, username, profile, isFav, toggleFavourite, toggleModal, photo }) => {
  const handleToggleFavourite = () => {
    toggleFavourite(id);

  };
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photoId={id}
        isFav={isFav}
        toggleFavourite={handleToggleFavourite}
        onClick={() => toggleFavourite(photo.id)}
        toggleModal={toggleModal}
      />
      <div className="photo">
        <img src={imageSource} alt={`Photo ${id}`} className="photo-list__image" onClick={() => toggleModal(photo)}
        />
      </div>
      <div className="photo-list__user-details">
        <div className="profile-picture">
          <img src={profile} alt={`Profile ${id}`} className="photo-list__user-profile" />
        </div>
        <div className="photo-list__user-info">{username}
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>


      </div>
    </div>
  );
};

export default PhotoListItem;
