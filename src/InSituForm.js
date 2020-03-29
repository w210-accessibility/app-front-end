import React, { useState } from 'react';


function InSituForm(props){

  const [checkedBoxes, setCheckedBoxes] = useState({'snowIce': false,
                                                    'surfaceIrregularity': false,
                                                    'missingCurbRamp': false,
                                                    'puddles': false,
                                                    'construction': false,
                                                    'normal': false});

  const handleChange = (e) => {
    setCheckedBoxes({
      ...checkedBoxes,
      [e.target.name]: checkedBoxes[e.target.name]==false ? true : false,
    });
  }

  return (<React.Fragment>
            <input type="checkbox" name="snowIce" checked={checkedBoxes['snowIce']} onChange={handleChange} /> Snow/Ice
            <input type="checkbox" name="puddles" checked={checkedBoxes['puddles']} onChange={handleChange} /> Puddles
            <input type="checkbox" name="construction" checked={checkedBoxes['construction']} onChange={handleChange} /> Construction
            <input type="checkbox" name="surfaceIrregularity" checked={checkedBoxes['surfaceIrregularity']} onChange={handleChange} /> Uneven Surface
            <input type="checkbox" name="missingCurbRamp" checked={checkedBoxes['missingCurbRamp']} onChange={handleChange} /> Missing Curb Ramp
            <input type="checkbox" name="normal" checked={checkedBoxes['normal']} onChange={handleChange} /> Normal
            <button onClick={() => props.handleSubmit(checkedBoxes)}>Submit</button>
          </React.Fragment>)
}

export default InSituForm;
