import React, { useState } from 'react';
import { render } from "react-dom";
import MapContainer from './MapContainer.js';
import MapContainerGeolocated from './MapContainerGeolocated.js';
import BottomNavBar from './BottomNavBar.js';
import TopAppBar from './TopAppBar';

function App() {
  const [showInSituDialog, setShowInSituDialog] = useState(false);
  const [showLegend, setShowLegend] = useState(true);
  const [inSituSelection, setInSituSelection] = useState(null);

  function handleLegendClick(){
    if (showLegend){
      setShowLegend(false);
    } else {
      setShowLegend(true);
      setShowInSituDialog(false);
      setInSituSelection(null);
    }
  }

  function handleInSituStatusChange(){
    if (showInSituDialog){
      setShowInSituDialog(false);
      setInSituSelection(null);
    } else {
      setShowLegend(false);
      setShowInSituDialog(true);
    }
  }

  return (
    <div>
      <TopAppBar />
      <MapContainerGeolocated handleInSituStatusChange={handleInSituStatusChange}
                              handleLegendClick={handleLegendClick}
                              showInSituDialog={showInSituDialog}
                              inSituSelection={inSituSelection}
                              setInSituSelection={setInSituSelection}
                              showLegend={showLegend}/>
      <BottomNavBar handleInSituStatusChange={handleInSituStatusChange}
                    handleLegendClick={handleLegendClick}/>
    </div>

  );
}

export default App;

const container = document.getElementById("root");
render(<App />, container);
