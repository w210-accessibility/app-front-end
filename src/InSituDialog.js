import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InSituForm from './InSituForm.js';


function InSituDialog(props){
  const inSituApi = props.api_url + "/api/addInSitu/"
  const [dialog, setDialog] = useState("Find a place on the map where you want to report an issue in the sidewalks or other pedestrian ways. Use the cursor to select the exact location.")
  const [showInSituForm, setShowInSituForm] = useState(false);

  function handleSubmit(checkedBoxes){
    setShowInSituForm(false);
    setDialog("Thank you for submitting this issue. A marker will appear next time you refresh the page.");
    const keys = Object.keys(checkedBoxes);
    keys.map((key) => {
      if (checkedBoxes[key]){
        axios.post(inSituApi, {
          lat: props.location[1],
          long: props.location[0],
          mode: 'select',
          label: key
        })
             //.then( res => {
            //   props.handleInSituFlowEnd();
            // })
            // .catch( err => {
               // for now this is the same as success
               // we just want to make sure user gets back to map whether or not heir submission worked
            //   props.handleInSituFlowEnd();
            // })
      }
    })

  }

  useEffect(() => {
    // THIS IS REALLY HACKY
    if (props.location != null && !dialog.includes("Thank you")){
      setDialog("Please select all conditions that apply to this location:")
      setShowInSituForm(true);
    }
  })

  return (<div className='InSituDialog'>
            <h2>Report Issues</h2>
            <button className="close" onClick={() => props.handleInSituStatusChange()}>&times;</button>
            <p>{dialog}</p>
            {showInSituForm ? <InSituForm handleSubmit={handleSubmit}/> : null}
          </div>)

}

export default InSituDialog;
