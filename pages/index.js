import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    margin: 'auto',
    maxWidth: theme.spacing(128),
    padding: theme.spacing(4, 6),
    textAlign: 'center',
  },
  welcomePage: {},
  welcomeTitle: {},
  paragraphs: {
    margin: 'auto',
    marginBottom: theme.spacing(2),
    maxWidth: theme.typography.pxToRem(480),
  },
  naan: {
    marginTop: theme.spacing(2),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Typography
        variant="h5"
        component="h1"
        className={classes.welcomeTitle}
        gutterBottom
      >
        Welcome to Naany!
      </Typography>

      <Typography variant="body1" component="p" className={classes.paragraphs}>
        An anonymous message board where you can create a post, and share a link
        you receive with anyone.
      </Typography>

      <Typography variant="h4" component="p" gutterBottom>
        👨‍💻
      </Typography>

      <Typography variant="body1" component="p" className={classes.paragraphs}>
        They then get to comment on the post anonymously, including the author
        of the original post.
      </Typography>

      <Typography variant="h4" component="p" gutterBottom>
        👩‍🚀🦹‍♀️🧙‍♂️👩‍🎨👨‍💻👩‍🌾
      </Typography>

      <Button
        color="primary"
        size="large"
        variant="contained"
        className={classes.naan}
        onClick={() => alert('Not yet implemented, come back later.')}
      >
        Om Naan Naan
      </Button>
    </main>
  );
}

export default Home;
