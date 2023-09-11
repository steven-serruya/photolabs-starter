import React from 'react';
import { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';



const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { photoData } = state;
  const { topicData } = state;

  console.log(topicData);
  
  const [favourites, setFavourites] = useState([]);
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedPhoto: null
  });
  const toggleFavourite = (photoId) => {

    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter(id => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  const toggleModal = (photo) => {
    if (photo) {
      setModalState({
        isOpen: true,
        selectedPhoto: photo
      });
    } else {
      setModalState({
        isOpen: false,
        selectedPhoto: null
      });
    }
  };


  return (
    <div className="App">
      <HomeRoute
        topicData={topicData}
        photoData={photoData}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
        toggleModal={toggleModal}
      />      {modalState.isOpen &&
        <PhotoDetailsModal
          onClose={toggleModal}
          photo={modalState.selectedPhoto}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          toggleModal={toggleModal}
        />}



    </div>

  );
};

export default App;
