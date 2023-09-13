import React, {useContext} from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import {AppContext} from "../App";

const PhotoList = () => {
  const {state} = useContext(AppContext);
  const photos = state.photoData;
  return (
    <ul className="photo-list">
      {photos.map((item) => (
        <li key={item.id}>
          <PhotoListItem
            displayItem={item}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;