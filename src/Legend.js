import React from 'react';

function Legend(props){
  return (<div className="InSituDialog">
            <button className="close" id="legendClose" onClick={() => props.setShowLegend(false)}>&times;</button>
            <p id="firstLegendItem"><svg height="10" width="50">
                  <line x1="0" y1="0" x2="30" y2="0" style={{stroke: "#e01f1f", strokeWidth: 7}} />
                </svg>
                Steep change in elevation (over .1)
            </p>
            <p>
            <svg height="10" width="50">
                  <line x1="0" y1="0" x2="30" y2="0" style={{stroke: "#ddd540", strokeWidth: 7}} />
                </svg>
                Some change in elevation (.05-.1)
            </p>
            <p>
            <svg height="10" width="50">
                  <line x1="0" y1="0" x2="30" y2="0" style={{stroke: "#958d88", strokeWidth: 7}} />
                </svg>
                Little to no change in elevation (less than .05)
            </p>
            <p>
            <svg height="10" width="50">
                  <circle cx="5" cy="5" r="5" style={{fill: "#e01f1f"}} />
                </svg>
                Missing curb ramp
            </p>
         </div>)
}

export default Legend;
