import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


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
            <label><input type="checkbox" name="snowIce" checked={checkedBoxes['snowIce']} onChange={handleChange} /> Snow/Ice</label>
            <label><input type="checkbox" name="puddles" checked={checkedBoxes['puddles']} onChange={handleChange} /> Puddles</label>
            <label><input type="checkbox" name="construction" checked={checkedBoxes['construction']} onChange={handleChange} /> Construction</label>
            <label><input type="checkbox" name="surfaceIrregularity" checked={checkedBoxes['surfaceIrregularity']} onChange={handleChange} /> Uneven Surface</label>
            <label><input type="checkbox" name="missingCurbRamp" checked={checkedBoxes['missingCurbRamp']} onChange={handleChange} /> Missing Curb Ramp</label>
            <label><input type="checkbox" name="normal" checked={checkedBoxes['normal']} onChange={handleChange} /> Normal</label>
            <Button varient="Contained" endIcon={<DoubleArrowIcon/>} size="small" id="submit" onClick={() => props.handleSubmit(checkedBoxes)}>Submit</Button>
          </React.Fragment>)
}

export default InSituForm;
