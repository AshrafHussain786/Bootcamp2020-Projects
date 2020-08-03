
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,    
  },  
  title: {
    flexGrow: 1,
  },
  
});

export function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink activeClassName="menu-active" to="/" className="linkMain" style={{ "float": "left", "fontSize": "25px",  "padding": "5px", "color": "white", "textDecoration": "none" }}>
              Project 4B</NavLink>
          </Typography>
          <Typography variant="h6">
            <NavLink activeClassName="menu-active" to="/" style={{ "float": "left", "marginRight": "50px", "padding": "5px", "color": "white", "textDecoration": "none" }}>
              Home</NavLink >
          </Typography>
          <Typography variant="h6">
            <NavLink activeClassName="menu-active" to="/about" style={{ "float": "left", "marginRight": "50px", "padding": "5px", "color": "white", "textDecoration": "none" }}>
              About</NavLink>
          </Typography>  
          <Typography variant="h6">
            <NavLink activeClassName="menu-active" to="/project" style={{ "float": "left", "marginRight": "50px", "padding": "5px", "color": "white", "textDecoration": "none" }}>
              Projects</NavLink>
          </Typography>  
          <Typography variant="h6">
            <NavLink activeClassName="menu-active" to="/contact" style={{ "float": "left", "marginRight": "50px", "padding": "5px", "color": "white", "textDecoration": "none" }}>
              Contact us</NavLink>
              </Typography>        
        </Toolbar>
      </AppBar >
    </div >
  );
}