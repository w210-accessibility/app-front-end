import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SidewaukeeLogo from './logo_rectangle.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  
}));

export default function TopAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} color="transparent" >
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
          <img src={SidewaukeeLogo} alt="Sidewaukee Logo"  />
          </Typography>  
        
        </Toolbar>
      </AppBar>
    </div>
  );
}
