import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import home from './../images/tabs.jpg'
import { Typography } from '@material-ui/core';
import useWebAnimations,{rollIn, slideInDown,slideInRight} from '@wellyshen/use-web-animations';
import ContactUs from './ContactUs';
import About from './About';
const useStyles = makeStyles((theme) => ({
  container: {
    background:'#acc7f2',
    width:'100%',
    // height:'593px',
    height:'auto'
     },
  tab:{
    //   position:"absolute",
    // backgroundSize:"cover",
    //   top:'40%',
      width:"100%",
      height:"100%"
  },
  text:{
      position:'absolute',
      top:'30%',
      color:'#d9d5cc',
      left:'10%',

  },
  G:{
    position:'absolute',
    color:'#d9d5cc',
    left:'2%',
    top:'40%',

  },
  
}));


export default function Home() {
  const classes = useStyles();
const{keyframes,timing}=slideInDown ;

const{ref:trex}=useWebAnimations({
  keyframes,
  timing:{
    ...timing,
    duration:2000,
    iterations:Infinity,
    direction:"alternate",
    easing:"ease-in-out"

  }

})
const{keyframes:keyframes1,timing:timing1}=slideInRight

const {ref}=useWebAnimations({
keyframes:[
  {transform:"translateY(400%)",borderBox:"2px #727d75"},
  {transform:"translateY(100%)"},
  {transform:"translateY(40%)"},
  {transform:"translateY(30%)"}
],
timing:{
  duration:3000,
  delay:500,
  iterations:Infinity,
  direction:"alternate",

  easing:"ease-in-out"

}
})
const{ref:tabimg}=useWebAnimations({...rollIn
,
timing:{
  duration:2500
}
})
  return (
    <div className={classes.container}> 
    <img ref={tabimg}className={classes.tab} src={home} alt="home..." />
    <Typography ref={trex} className={classes.text} variant="h4">
        TREX SOLUTIONS
    </Typography>
    <Typography  className={classes.G} variant="h3" ref={ref}>
        We Build.We Secure.We Automate
    </Typography>
         </div>
          
  );
}
