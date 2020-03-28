import React, { useState } from 'react';
import axios from 'axios';


function InSituDialog(props){
  const inSituApi = props.api_url + "/api/addInSitu/"
  const [checkedBoxes, setCheckedBoxes] = useState({'snowIce': false,
                                                    'surfaceIrregularity': false,
                                                    'missingCurbRamp': false});

  const handleChange = (e) => {
    setCheckedBoxes({
      ...checkedBoxes,
      [e.target.name]: checkedBoxes[e.target.name]==false ? true : false,
    });
  }

  function controlDialogFlow(){
    if (props.location == null){
      return <p>Choose a location on the map where you want to report an issue:</p>
    } else {
      return (<React.Fragment>
                <p>Please select all conditions that apply to this location:</p>
                <input type="checkbox" name="snowIce" checked={checkedBoxes['snowIce']} onChange={handleChange} /> Snow/Ice
                <input type="checkbox" name="surfaceIrregularity" checked={checkedBoxes['surfaceIrregularity']} onChange={handleChange} /> Surface Irregularity
                <input type="checkbox" name="missingCurbRamp" checked={checkedBoxes['missingCurbRamp']} onChange={handleChange} /> Missing Curb Ramp
                <button onClick={handleSubmit}>Submit</button>
              </React.Fragment>)
    }
  }

  function handleSubmit(){
    const keys = Object.keys(checkedBoxes);
    keys.map((key) => {
      if (checkedBoxes[key]){
        axios.post(inSituApi, {
          lat: props.location[1],
          long: props.location[0],
          mode: 'select',
          label: key
        })
             .then( res => {
               console.log(res);
             })
      }
    })

  }

  return (<div className='InSituDialog'>
          {controlDialogFlow()}
          </div>)

}

export default InSituDialog;
