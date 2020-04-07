import React, { useState } from 'react';
import { render } from "react-dom";
import MapContainer from './MapContainer.js';
import BottomNavBar from './BottomNavBar.js';
import TopAppBar from './TopAppBar';

function App() {
  const [showInSituDialog, setShowInSituDialog] = useState(false);
  const [showLegend, setShowLegend] = useState(false);

  return (
    <div>
      <TopAppBar />
      <MapContainer showInSituDialog={showInSituDialog}
                    setShowInSituDialog={setShowInSituDialog}
                    showLegend={showLegend}
                    setShowLegend={setShowLegend}/>
      <BottomNavBar setShowInSituDialog={setShowInSituDialog}
                    setShowLegend={setShowLegend}/>
    </div>

  );
}

export default App;

const container = document.getElementById("root");
render(<App />, container);
