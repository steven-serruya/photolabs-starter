/* eslint-disable indent */

// Import necessary hooks from React

import { useReducer, useEffect } from 'react';
// Initial state for the application data

const useApplicationData = () => {
  const initialState = {
    favourites: [],
    modalState: {
      isOpen: false,
      selectedPhoto: null,
    },
    photoData: [],
    topicData: [],
    selectedTopicPhotoData: []
  };
  // Use the React useReducer hook to manage complex state logic

  const [state, dispatch] = useReducer(reducer, initialState);

  // Toggle a photo ID in or out of favourites

  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    }
  };

  // Set topic data

  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };


  // Select a photo

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  // Close the photo details modal

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { photo: null } });
  };

  // Select a photo (wrapper function)

  const onPhotoSelect = (photo) => {
    setPhotoSelected(photo);
  };

  // Set photo data

  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
  };

  // Load topics

  const onLoadTopic = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };

  // Handle a topic being clicked

  const handleTopicClick = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: { topicId } });
  };

  // Effect to fetch photos on component mount

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(response => response.json())

      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  // Effect to fetch topics on component mount

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")

      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      });
  }, []);

  // Effect to fetch photos based on the selected topic

  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`http://localhost:8001/api/topics/photos/${state.selectedTopic}`)
        .then(response => response.json())
        .then(data => {
          dispatch({ type: ACTIONS.SET_SELECTED_TOPIC_PHOTO_DATA, payload: data });
        })
        .catch(error => {
          console.error('Error fetching photos by topic:', error);
        });
    }
  }, [state.selectedTopic]);


  // Return the state and dispatcher functions

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    setPhotoData,
    setTopicData,
    handleTopicClick
  };
};

// Define action constants

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC',
  SET_SELECTED_TOPIC_PHOTO_DATA: 'SET_SELECTED_TOPIC_PHOTO_DATA'

};

// Reducer function to handle state updates based on actions

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.payload.photoId],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter(id => id !== action.payload.photoId),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        modalState: {
          ...state.modalState,
          selectedPhoto: action.payload.photo,
        },
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        modalState: {
          isOpen: !!action.payload.photo,
          selectedPhoto: action.payload.photo,
        },
      };
    case ACTIONS.SET_SELECTED_TOPIC:
      return {
        ...state,
        selectedTopic: action.payload.topicId
      };

    case ACTIONS.SET_SELECTED_TOPIC_PHOTO_DATA:
      return {
        ...state,
        selectedTopicPhotoData: action.payload

      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

export default useApplicationData;
