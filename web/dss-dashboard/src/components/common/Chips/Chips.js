import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& span':{
      width: 'auto'
    } 
  },
};

class Chips extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        data:null
      }
  }
  handleClick = () => {
    this.props.handleClick(this.props.visualcode);
  }

  render(){
   let { val, classes }=this.props;
    return (
      <div >      
        <Chip
        className={classes.root}
          variant="outlined"
          size="small"
          avatar={<Avatar>{val.type}</Avatar>}
          label={val.label}
          // color="ward"
          clickable
          onDelete={this.handleClick}
        />  
      </div>
    );
   }
}

export default withStyles(useStyles)(Chips);
