import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AboutIcon from '@material-ui/icons/InfoOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import AddContentIcon from '@material-ui/icons/AddCircleOutline';
import LegendIcon from '@material-ui/icons/List';

// resizes the navigation bar to fit the screen size
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BottomNavBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

<<<<<<< HEAD
  
=======
  function handleContributeClick(){
    props.setShowInSituDialog(true);
  }

  function handleLegendClick(){
    props.setShowLegend(true);
  }

>>>>>>> 566955eb9452e59e1c30682007b382aa9695e425
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
<<<<<<< HEAD
     
      <BottomNavigationAction label="Legend" icon={<LegendIcon />} />
      <BottomNavigationAction label="Contribute" icon={<AddContentIcon />} />
      <BottomNavigationAction label="Other Apps" icon={<AppsIcon />} />
      <BottomNavigationAction label="About" icon={<AboutIcon />} />
      
=======

      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorite Apps" icon={<AppsIcon />} />
      <BottomNavigationAction label="Contribute" icon={<AddContentIcon />} onClick={handleContributeClick} />
      <BottomNavigationAction label="Legend" icon={<AddContentIcon />} onClick={handleLegendClick} />
>>>>>>> 566955eb9452e59e1c30682007b382aa9695e425
    </BottomNavigation>
  );
}
