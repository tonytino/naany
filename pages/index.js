import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
    maxWidth: theme.spacing(128),
    margin: 'auto',
    height: `calc(100vh - ${theme.spacing(8)}px)`,
  },
  content: {
    padding: theme.spacing(4, 6),
    height: '100%',
  },
  contentTitle: {
    paddingBottom: theme.spacing(2),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Paper className={classes.content}>
        <Typography
          variant="h5"
          component="h3"
          className={classes.contentTitle}
        >
          Welcome to the Home Page
        </Typography>

        <Typography component="p">
          This is the most usable space we will ever provide in the app. The
          sides can be used for auxiliary purposes, left left and right drawers
          for navigation and forms, respectively.
        </Typography>
      </Paper>
    </main>
  );
}

export default Home;
