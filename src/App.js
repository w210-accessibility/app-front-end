import React from 'react';
import { render } from "react-dom";
import MapContainer from './MapContainer.js';
import BottomNavBar from './BottomNavBar.js';

function App() {
  return (
    <div>
      <MapContainer />
      <BottomNavBar />
    </div>
  );
}

export default App;

const container = document.getElementById("root");
render(<App />, container);
