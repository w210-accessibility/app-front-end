import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


function InSituForm(props){

  const [checkedBoxes, setCheckedBoxes] = useState({'snowIce': false,
                                                    'puddles': false,
                                                    'construction': false,
                                                    'obstacle': false,
                                                    'surfaceIrregularity': false,
                                                    'missingCurbRamp': false,
                                                    'noSidewalk': false,
                                                    'issueResolved': false});

  const handleChange = (e) => {
    setCheckedBoxes({
      ...checkedBoxes,
      [e.target.name]: checkedBoxes[e.target.name]==false ? true : false,
    });
  }

  return (<React.Fragment>
            <label><input type="checkbox" name="snowIce" checked={checkedBoxes['snowIce']} onChange={handleChange} /> Snow/Ice</label>
            <label><input type="checkbox" name="puddles" checked={checkedBoxes['puddles']} onChange={handleChange} /> Puddle</label>
            <label><input type="checkbox" name="construction" checked={checkedBoxes['construction']} onChange={handleChange} /> Construction</label>
            <label><input type="checkbox" name="obstacle" checked={checkedBoxes['obstacle']} onChange={handleChange} /> Other Obstacle</label>
            <label><input type="checkbox" name="surfaceIrregularity" checked={checkedBoxes['surfaceIrregularity']} onChange={handleChange} /> Uneven/Damaged Surface</label>
            <label><input type="checkbox" name="missingCurbRamp" checked={checkedBoxes['missingCurbRamp']} onChange={handleChange} /> Missing Curb Ramp</label>
            <label><input type="checkbox" name="noSidewalk" checked={checkedBoxes['noSidewalk']} onChange={handleChange} /> No Sidewalk</label>
            <label><input type="checkbox" name="issueResolved" checked={checkedBoxes['normal']} onChange={handleChange} /> Issue Resolved</label>
            <Button varient="Contained" endIcon={<DoubleArrowIcon/>} size="small" id="submit" onClick={() => props.handleSubmit(checkedBoxes)}>Submit</Button>
          </React.Fragment>)
}

export default InSituForm;
