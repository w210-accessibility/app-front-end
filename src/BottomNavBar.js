import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import RestoreIcon from '@material-ui/icons/Restore';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import AddContentIcon from '@material-ui/icons/AddCircleOutline';

// resizes the navigation bar to fit the screen size
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BottomNavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorite Apps" icon={<AppsIcon />} />
      <BottomNavigationAction label="Contribute" icon={<AddContentIcon />} />
    </BottomNavigation>
  );
}
