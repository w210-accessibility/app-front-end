import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AboutIcon from '@material-ui/icons/InfoOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import AddContentIcon from '@material-ui/icons/AddCircleOutline';
import LegendIcon from '@material-ui/icons/List';
//import { Link } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';

// resizes the navigation bar to fit the screen size
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BottomNavBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
    
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  function handleContributeClick(){
    props.setShowInSituDialog(true);
  }

  function handleLegendClick(){
    props.setShowLegend(true);
  }

  
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
     
      <BottomNavigationAction label="Legend" icon={<LegendIcon />} onClick={handleLegendClick}/>
      <BottomNavigationAction label="Contribute" icon={<AddContentIcon />} onClick={handleContributeClick} />
      <BottomNavigationAction label="Other Apps" 
                              icon={<AppsIcon />} 
                              onClick={handleClick1}  />
                                <Menu
                                id="appsmenu"
                                anchorEl={anchorEl1}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'center',
                                }}
                                open={Boolean(anchorEl1)}
                                onClose={handleClose1} 
                                TransitionComponent={Fade}
                                >
                                  <MenuItem onClick={handleClose1
                                  }> 
                                    <Link href="https://wheelmap.org/" target="_blank" rel="noopener"> 
                                      <b>Wheelmap</b><br></br><i>Find wheelchair accessible places</i>
                                    </Link>
                                  </MenuItem>
                                  <MenuItem onClick={handleClose1}> 
                                    <Link href="https://city.milwaukee.gov/ucc#.XoJl64g3mMp" target="_blank" rel="noopener"> 
                                      <b>311 Milwaukee</b><br></br><i>Milwaukee Unified Call Center</i>
                                    </Link>
                                  </MenuItem>
                                  <MenuItem onClick={handleClose1}> 
                                    <Link href="https://www.visitmilwaukee.org/plan-a-visit/getting-here-and-around/accessibility-in-milwaukee-for-disabled-travelers/" target="_blank" rel="noopener"> 
                                      <b>Visit Milwaukee</b><br></br> <i>Visitor's guide</i>
                                    </Link>
                                  </MenuItem>
                                  <MenuItem onClick={handleClose1}> 
                                    <Link href="https://www.ridemcts.com/rider-information/accessibility" target="_blank" rel="noopener"> 
                                      <b>MCTS</b><br></br><i>Milwaukee County Transit System</i> 
                                    </Link>
                                  </MenuItem>
                                  <MenuItem onClick={handleClose1}> 
                                    <Link href="http://www.parkmilwaukee.com/" target="_blank" rel="noopener"> 
                                      <b>Park Milwaukee</b><br></br><i>Your downtown parking resource</i> 
                                    </Link>
                                  </MenuItem>
                                  <MenuItem onClick={handleClose1}> 
                                    <Link href="https://www.parkingmobility.com/volunteer" target="_blank" rel="noopener"> 
                                      <b>Parking Mobility</b><br></br><i>Report accessible parking abuse</i> 
                                    </Link>
                                  </MenuItem>
                                </Menu>
                              
      <BottomNavigationAction label="About" 
                              icon={<AboutIcon />} 
                              onClick={handleClick2}  />
                              <Menu
                                id="aboutmenu"
                                anchorEl={anchorEl2}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'center',
                                }}
                                open={Boolean(anchorEl2)}
                                onClose={handleClose2} 
                                TransitionComponent={Fade}
                              >
                                <MenuItem onClick={handleClose2}>
                                  <Link href="https://w210-accessibility.github.io/sidewaukee/" target="_blank" rel="noopener">
                                     <b>Sidewaukee Pages</b><br></br>
                                     Learn more about our project from our github pages
                                   </Link>
                                </MenuItem>  
                              </Menu>
                              
    </BottomNavigation>  
  );
}
