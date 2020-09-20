import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  propsDiv: {
    height: '100px',
    padding: '10px',
    float: 'left',
    border: '1px solid red'
  },
  propsButton: {
    color: '#fff'
  }
}));