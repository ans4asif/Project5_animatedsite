import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link } from 'react-router-dom'
import About from './About';
import ContactUs from './ContactUs'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
  color:'pink',

  }, 
  links:{
  marginLeft:'20px'

  },
  
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{background:"#F5F6FC"}}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link to="/" style={{textDecorationLine:"none"}}>
            TREX
            </Link>
          </Typography >
          <div className={classes.links}>
          <Link  style={{textDecorationLine:"none"}} to="/" >Home</Link>{' '}
          <Link style={{textDecorationLine:"none"}} to="/about" element={<About/>}>About</Link>{' '}
          <Link style={{textDecorationLine:"none"}} to="/contact-us"element={<ContactUs/>}>Contact Us</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

