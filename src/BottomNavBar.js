import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import AddContentIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
  root: {
    width: 1500,
  },
});

export default function BottomNavBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleContributeClick(){
    props.setShowInSituDialog(true);
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

      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Contribute" icon={<AddContentIcon />} onClick={handleContributeClick} />
    </BottomNavigation>
  );
}
