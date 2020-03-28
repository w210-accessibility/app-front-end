import React, { useState } from 'react';
import { render } from "react-dom";
import MapContainer from './MapContainer.js';
import BottomNavBar from './BottomNavBar.js';

function App() {
  const [showInSituDialog, setShowInSituDialog] = useState(false);

  return (
    <div>
      <MapContainer showInSituDialog={showInSituDialog} />
      <BottomNavBar setShowInSituDialog={setShowInSituDialog} />
    </div>
  );
}

export default App;

const container = document.getElementById("root");
render(<App />, container);
