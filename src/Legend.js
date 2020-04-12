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
            <p>
            <h3>Icons</h3>
            <svg height="10" width="50">
                  <circle cx="5" cy="5" r="5" style={{fill: "#e01f1f"}} />
                </svg>
                Missing curb ramp
            </p>
            <p>
            <svg height='15px' width='50px'  fill="#000080" viewBox="0 0 100 100" version="1.1" x="0px" y="0px"><g transform="translate(0,-952.36216)"><path d="m 50.00011,957.36222 a 35.58561,35.58561 0 0 0 -35.585765,35.58572 35.58561,35.58561 0 0 0 23.457518,33.40776 l 12.128247,21.0065 12.117967,-20.9889 A 35.58561,35.58561 0 0 0 85.585717,992.94794 35.58561,35.58561 0 0 0 50.00011,957.36222 Z m 0,9.18972 a 26.396067,26.396067 0 0 1 26.395955,26.396 26.396067,26.396067 0 0 1 -26.395955,26.39596 26.396067,26.396067 0 0 1 -26.396112,-26.39596 26.396067,26.396067 0 0 1 26.396112,-26.396 z"></path><path d="m 49.94713,977.62639 c -0.188199,0.002 -0.376715,0.007 -0.56523,0.0185 -1.005521,0.0599 -2.011833,0.26468 -2.986673,0.62116 -3.899517,1.42598 -6.554706,5.05089 -6.597249,9.13938 l 3.795613,0.0395 c 0.02578,-2.47504 1.617089,-4.70417 4.105113,-5.61404 2.488182,-0.90986 5.310694,-0.25197 7.07518,1.61239 1.764327,1.86434 2.141674,4.4935 0.989864,6.72975 -0.94068,1.8267 -2.780603,3.07661 -4.874516,3.35389 l -1.922161,0 0,6.8134 3.795612,0 0,-3.32822 c 2.712914,-0.73693 5.058919,-2.5453 6.375364,-5.10129 1.878512,-3.64731 1.225192,-8.08348 -1.607442,-11.0767 -1.991589,-2.1046 -4.759856,-3.22421 -7.583475,-3.2078 z"></path><path d="m 48.967071,1003.8351 0,4.4347 3.795612,0 0,-4.4347 -3.795612,0 z"></path></g></svg>

            User Report
            </p>
         </div>)
}

export default Legend;
