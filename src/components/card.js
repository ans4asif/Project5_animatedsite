import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useWebAnimations,{bounce} from '@wellyshen/use-web-animations'


const useStyles = makeStyles({
  root: {
  
    width:'30%',
    margin:'70px 0 25px 30px',
    minHeight:350
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  
  const{ref:web}=useWebAnimations({...bounce
    ,
    timing:{
        duration:3000,
        delay:2000,
        iterations:'Infinity',
        easing:'ease-in'
    }
        })

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          image={props.imagesrc}
          title="Contemplative Reptile"
          ref={web}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {props.dscr}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    
  );
}
