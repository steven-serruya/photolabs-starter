/* eslint-disable indent */

import { useReducer, useEffect } from 'react';

const useApplicationData = () => {
  const initialState = {
    favourites: [],
    modalState: {
      isOpen: false,
      selectedPhoto: null,
    },
    photoData: [],
    topicData: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    }
  };

  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };


  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { photo: null } });
  };

  const onPhotoSelect = (photo) => {
    setPhotoSelected(photo);
  };

  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
  };

  const onLoadTopic = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };

  const handleTopicClick = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: { topicId } });
  };


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

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")

      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      });
  }, []);

  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`http://localhost:8001/api/topics/photos/${state.selectedTopic}`)
        .then(response => response.json())
        .then(data => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        })
        .catch(error => {
          console.error('Error fetching photos by topic:', error);
        });
    }
  }, [state.selectedTopic]);



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

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC'

};

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
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

export default useApplicationData;
