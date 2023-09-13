/* eslint-disable indent */

import { useEffect, useReducer } from "react";
import axios from 'axios';

const ACTIONS = {
  FAV_PHOTO: 'FAV_PHOTO',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DETAIL_MODAL: 'DETAIL_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};
const useApplicationData = () => {

  // use Promise.all to handle multiple api requests
  const requests = [axios.get('/api/photos'), axios.get('/api/topics')];

  useEffect(() => {
    Promise.all(requests)
      .then(res => {
        const photos = res[0].data;
        const topics = res[1].data;
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
      });
  }, []);


  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO:
        if (state.favorite.includes(action.payload)) {
          return {
            ...state,
            favorite: state.favorite.filter(id => id !== action.payload)
          };
        } else {
          return {
            ...state,
            favorite: [...state.favorite, action.payload]
          };
        }

      case ACTIONS.SELECT_PHOTO:
        if (state.select.includes(action.payload)) {
          return {
            ...state,
            select: state.select.filter(id => id !== action.payload)
          };
        } else {
          return {
            ...state,
            select: [...state.select, action.payload]
          };
        }

      case ACTIONS.DETAIL_MODAL:
        if (action.payload === null || state.detailItem === action.payload) {
          return {
            ...state,
            detailModal: false,
            detailItem: null
          };
        } else {
          return {
            ...state,
            detailModal: true,
            detailItem: action.payload
          };
        }
      case ACTIONS.SET_PHOTO_DATA:
        return {
          ...state,
          photoData: action.payload
        };

      case ACTIONS.SET_TOPIC_DATA:
        return {
          ...state,
          topicData: action.payload
        };

      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return {
          ...state,
          photoData: action.payload
        };

      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );

    }
  };

  const initialState = {
    photoData: [],
    topicData: [],
    favorite: [],
    detailModal: false,
    detailItem: [],
    select: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  const isSelected = (id) => {
    return state.select.includes(id);
  };
  const updateToFavPhotoIds = (item) => {
    dispatch({ type: ACTIONS.FAV_PHOTO, payload: item.id });
  };

  const setPhotoSelected = (item) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: item.id });
  };

  const onClosePhotoDetailsModal = (item) => {
    dispatch({ type: ACTIONS.DETAIL_MODAL, payload: item });
  };

  const fetchPhotosByTopic = (topic) => {
    axios.get(`/api/topics/photos/${topic}`)
      .then(res => {
        const photos = res.data;
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: photos });
      });

  };

  return {
    state, isSelected, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal, fetchPhotosByTopic
  };
};

export default useApplicationData;
