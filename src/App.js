import React, { useState } from 'react';
import { render } from "react-dom";
import MapContainer from './MapContainer.js';
import BottomNavBar from './BottomNavBar.js';
import {ReactComponent as Logo} from './logo_rectangle.png';

function App() {
  const [showInSituDialog, setShowInSituDialog] = useState(false);
  const [showLegend, setShowLegend] = useState(false);

  return (
<<<<<<< HEAD
    <div className = "App">
      <Logo />
      <MapContainer />
      <BottomNavBar />
=======
    <div>
      <TopAppBar />
      <MapContainer showInSituDialog={showInSituDialog}
                    setShowInSituDialog={setShowInSituDialog}
                    showLegend={showLegend}
                    setShowLegend={setShowLegend}/>
      <BottomNavBar setShowInSituDialog={setShowInSituDialog}
                    setShowLegend={setShowLegend}/>
>>>>>>> 566955eb9452e59e1c30682007b382aa9695e425
    </div>

  );
}

export default App;

const container = document.getElementById("root");
render(<App />, container);
