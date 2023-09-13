import React, { useContext } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";
import { AppContext } from "../App";

const PhotoDetailsModal = () => {

  const { state, isSelected, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal } = useContext(AppContext);

  const similarPhotos = [];

  for (const photo in state.detailItem['similar_photos']) {
    similarPhotos.push(state.detailItem['similar_photos'][photo]);
  }


  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol" onClick={() => onClosePhotoDetailsModal(null)} />
        </button>
      </div>

      <div className="photo-details-modal__images">
        <PhotoFavButton selected={isSelected(state.detailItem.id)} onClick={() => {
          updateToFavPhotoIds(state.detailItem);
          setPhotoSelected(state.detailItem);
        }} />
        <img src={state.detailItem.urls.full} alt="profile picture" className="photo-details-modal__image" />
        <div className="photo-list__user-details">
          <img src={state.detailItem.user.profile} alt="profile picture" className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            <p>{state.detailItem.user.name}</p>
            <p
              className="photo-list__user-location">{state.detailItem.location.city}, {state.detailItem.location.country}</p>
          </div>
        </div>

        {similarPhotos.length !== 0 && <h3 className="photo-details-modal__header">Similar Photos</h3>}
        <div>
          <PhotoList photos={similarPhotos} state={state} isSelected={isSelected}
            updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected}
            onClosePhotoDetailsModal={onClosePhotoDetailsModal} />
        </div>


      </div>
    </div>);
};

export default PhotoDetailsModal;
