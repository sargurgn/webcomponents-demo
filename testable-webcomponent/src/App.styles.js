import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    appDiv: {
        height: '200px', 
        padding: '10px', 
        float: 'left', 
        border: '1px solid blue'
    },
    parentButton: {
      color: '#fff'
    }
}));

export const useStylesForm = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));