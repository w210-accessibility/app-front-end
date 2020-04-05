import React from 'react';
import InSituIcon from './in_situ_icon.svg';

function Legend(props){
  const inSituIcon = new Image();
  inSituIcon.src = InSituIcon;
  return (<div className="InSituDialog">
            <button className="close" id="legendClose" onClick={() => props.setShowLegend(false)}>&times;</button>
            <p id="firstLegendItem"><svg height="10" width="50">
                  <line x1="0" y1="0" x2="30" y2="0" style={{stroke: "#e01f1f", strokeWidth: 7}} />
                </svg>
                Severe elevation change (over 10% grade)
            </p>
            <p>
            <svg height="10" width="50">
                  <line x1="0" y1="0" x2="30" y2="0" style={{stroke: "#ddd540", strokeWidth: 7}} />
                </svg>
                Moderate elevation change (5-9% grade)
            </p>
            <p>
            <svg height="10" width="50">
                  <line x1="0" y1="0" x2="30" y2="0" style={{stroke: "#958d88", strokeWidth: 7}} />
                </svg>
                Mild elevation change (0-4% grade)
            </p>
            <p>
            <svg height="10" width="50">
                  <circle cx="5" cy="5" r="5" style={{fill: "#e01f1f"}} />
                </svg>
                Missing curb ramp
            </p>
            <p>
            <svg height='10px' width='50px'  fill="#e01f1f" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><path d="M50,11.7c3.7,0,7.2,2.5,10.3,7.5l28.9,52.9l0.1,0.2l0.1,0.2c1.9,2.7,2.6,4.7,2.6,6.9c0,5.1-4.3,8.9-9.9,8.9H18  c-5.7,0-9.9-3.8-9.9-8.9c0-2.2,0.8-4.2,2.6-6.9l0.1-0.2l0.1-0.2l28.9-52.9C42.8,14.2,46.3,11.7,50,11.7 M50,7.7  c-5.2,0-9.9,3.2-13.7,9.5l-28.9,53c-2.2,3.2-3.3,6-3.3,9.2c0,7.4,6.3,12.9,13.9,12.9h64c7.7,0,13.9-5.4,13.9-12.9  c0-3.2-1.2-6-3.3-9.2l-28.9-53C59.9,10.9,55.2,7.7,50,7.7L50,7.7z"></path><path d="M45.4,32.8c-0.1-1.3,0.4-2.5,1.3-3.5c1.8-1.8,4.8-1.8,6.6,0c1,1,1.5,2.4,1.3,3.8c0,0.1,0,0.2,0,0.3l-3,28.1  C51.5,62.4,50.8,63,50,63c-0.7,0-1.4-0.8-1.5-1.5l-3.2-28.1C45.3,33.2,45.3,33,45.4,32.8z"></path><circle cx="50" cy="71.4" r="4.7"></circle></svg>
            User-submitted feedback
            </p>
         </div>)
}

export default Legend;
