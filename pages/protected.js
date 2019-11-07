import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { useUserSessionContext } from './../contextes';

const useStyles = makeStyles(theme => ({
  container: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    maxWidth: theme.spacing(128),
    padding: theme.spacing(4, 6),
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 'auto',
  },
}));

function Protected() {
  const classes = useStyles();
  const { userSession } = useUserSessionContext();
  const prompt = userSession.xAuthToken
    ? `You're authenticated! 🎉`
    : `You need to log in! 🛑`;
  return (
    <main className={classes.container}>
      <Typography variant="h4">{prompt}</Typography>
    </main>
  );
}

export default Protected;
