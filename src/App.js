import React from 'react';
import { render } from "react-dom";
import MapContainer from './MapContainer.js';
import BottomNavBar from './BottomNavBar.js';
import {ReactComponent as Logo} from './logo_rectangle.png';

function App() {
  return (
    <div className = "App">
      <Logo />
      <MapContainer />
      <BottomNavBar />
    </div>
    
  );
}

export default App;

const container = document.getElementById("root");
render(<App />, container);
