import React from 'react';
import { render } from "react-dom";
import MapContainer from './MapContainer.js';
import BottomNavBar from './BottomNavBar.js';
import TopAppBar from './TopAppBar.js';

function App() {
  return (
    <div>
      <TopAppBar />
      <MapContainer />
      <BottomNavBar />
    </div>
    
  );
}

export default App;

const container = document.getElementById("root");
render(<App />, container);
