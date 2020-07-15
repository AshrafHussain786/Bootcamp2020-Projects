import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: "left",
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
            <Link to="/" className="linkMain" style={{ "float": "left", "fontSize": "25px",  "padding": "5px", "color": "white", "textDecoration": "none" }}>
              Shoe Store</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/" style={{ "float": "left", "marginRight": "50px", "padding": "5px", "color": "white", "textDecoration": "none" }}>
              Home</Link >
          </Typography>
          <Typography variant="h6">
            <Link to="/about" style={{ "float": "left", "marginRight": "50px", "padding": "5px", "color": "white", "textDecoration": "none" }}>
              About</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/product" style={{ "float": "left", "marginRight": "900px", "padding": "5px", "color": "white", "textDecoration": "none" }}>
              Product</Link>
          </Typography>
        </Toolbar>
      </AppBar >
    </div >
  );
}