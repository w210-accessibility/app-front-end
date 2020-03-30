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

  
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
     
      <BottomNavigationAction label="Legend" icon={<LegendIcon />} />
      <BottomNavigationAction label="Contribute" icon={<AddContentIcon />} />
      <BottomNavigationAction label="Other Apps" icon={<AppsIcon />} />
      <BottomNavigationAction label="About" icon={<AboutIcon />} />
      
    </BottomNavigation>
  );
}
