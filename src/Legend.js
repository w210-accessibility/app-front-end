import React from 'react';
import InSituIcon from './in_situ_icon.svg';

function Legend(props){
  const inSituIcon = new Image();
  inSituIcon.src = InSituIcon;
  return (<div className="Legend">
            <button className="close" id="legendClose" onClick={props.handleLegendClick}>&times;</button>
            <h3>Sidewalk Steepness</h3>
            <p><svg height="10" width="50">
                  <line x1="0" y1="0" x2="30" y2="0" style={{stroke: "#ed7d31", strokeWidth: 7}} />
                </svg>
                Severe
            </p>
            <p>
            <svg height="10" width="50">
                  <line x1="0" y1="0" x2="30" y2="0" style={{stroke: "#f1c232", strokeWidth: 7}} />
                </svg>
                Moderate
            </p>
            <p>
            <svg height="10" width="50">
                  <line x1="0" y1="0" x2="30" y2="0" style={{stroke: "#778ba5", strokeWidth: 7}} />
                </svg>
                Mild
            </p>
            <h3>Icons</h3>
            <p>
            <svg height="10" width="50">
                  <circle cx="25" cy="5" r="5" style={{fill: "#00a86b"}} />
                </svg>
                Present curb ramp
            </p>
            <p>
            <svg height='10px' width='50px'  fill="#990000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" x="0px" y="0px"><title>rhombus</title><path d="M8.354.146a.5.5,0,0,0-.707,0l-7.5,7.5a.5.5,0,0,0,0,.707l7.5,7.5a.5.5,0,0,0,.707,0l7.5-7.5a.5.5,0,0,0,0-.707Z"></path></svg>
                Missing curb ramp
            </p>
            <p>
            <svg height='15px' width='50px' fill="#000080"
              version="1.1" x="0px" y="0px"
              viewBox="0 0 96 96" enable-background="new 0 0 96 96">
              <path d="M48,96L48,96c-0.628,0-1.22-0.296-1.596-0.796C45.08,93.452,14,52.1,14,33.776C14,15.152,29.252,0,48,0  c18.752,0,34,15.148,34,33.772c0,18.576-31.084,59.692-32.412,61.436C49.212,95.704,48.624,96,48,96z"></path></svg>
              User Report
            </p>
         </div>)
}

export default Legend;
