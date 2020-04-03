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
import { Link } from 'react-router-dom';

// resizes the navigation bar to fit the screen size
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BottomNavBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
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
                              onClick={handleMenu}  />
                                <Menu
                                id="appsmenu"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'center',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose} 
                                >
                                  <MenuItem onClick={handleClose}><l1><a href="https://www.google.com/maps/" target="_blank"> Google Maps </a></l1></MenuItem>
                                  <MenuItem onClick={handleClose}> <l1><a href="https://city.milwaukee.gov/ucc#.XoJl64g3mMp" target="_blank"> 311 Milwaukee </a></l1></MenuItem>
                                  <MenuItem onClick={handleClose}> <l1><a href="https://wheelmap.org/" target="_blank"> Wheelmap </a></l1></MenuItem>
                                </Menu>
                              
      <BottomNavigationAction label="About" 
                              icon={<AboutIcon />} 
                              style={{display: "table-cell"}} 
                              href="https://github.com/w210-accessibility" 
                              target="_blank" />
    </BottomNavigation>
  );
}
