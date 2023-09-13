import React from 'react';


import './App.scss';

import HomeRoute from "./routes/HomeRoute";

import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import useApplicationData from "./hooks/useApplicationData";

export const AppContext = React.createContext(); // use context to prevent props drilling

// Note: Rendering a single component to build components in isolation
const App = () => {

  const contexts = useApplicationData();

  return (
    <AppContext.Provider value={contexts}>

      <div className="App">
        <HomeRoute />

        {/*render detail modal conditionally*/}
        {!!contexts.state.detailModal && <PhotoDetailsModal />}
      </div>

    </AppContext.Provider>
  );
};

export default App;