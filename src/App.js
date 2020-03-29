import React, { useState } from 'react';
import { render } from "react-dom";
import MapContainer from './MapContainer.js';
import MapContainerGeolocated from './MapContainerGeolocated.js';
import BottomNavBar from './BottomNavBar.js';
import TopAppBar from './TopAppBar.js';

function App() {
  const [showInSituDialog, setShowInSituDialog] = useState(false);

  return (
    <div>
      <TopAppBar />
      <MapContainerGeolocated showInSituDialog={showInSituDialog} setShowInSituDialog={setShowInSituDialog}/>
      <BottomNavBar setShowInSituDialog={setShowInSituDialog} />
    </div>

  );
}

export default App;

const container = document.getElementById("root");
render(<App />, container);
