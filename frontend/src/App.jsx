// Importing necessary modules and components

import React from 'react';
import { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';



const App = () => {
  // Destructuring methods and state from the custom hook

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
    handleTopicClick
  } = useApplicationData();

  // Destructuring data from the state

  const { photoData } = state;
  const { topicData } = state;

  // State to keep track of favourite photos

  const [favourites, setFavourites] = useState([]);

  const [currentView, setCurrentView] = useState('home');
  const likedPhotos = photoData.filter(photo => favourites.includes(photo.id));

  // State to manage modal's open/close and the selected photo

  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedPhoto: null
  });

  // Function to add/remove photos from favourites

  const toggleFavourite = (photoId) => {

    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter(id => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  // Function to open/close modal and set selected photo

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

  // Component rendering

  return (
    <div className="App">
      {/* HomeRoute component displaying topics and photos */}

      <HomeRoute
        handleTopicClick={handleTopicClick}
        topicData={topicData}
        photoData={currentView === 'home' ? photoData : likedPhotos}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
        toggleModal={toggleModal}
        setCurrentView={setCurrentView}
      />
      {/* Conditionally rendering the PhotoDetailsModal if modalState indicates it's open */}

      {modalState.isOpen &&
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
