import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
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
  loginButton: {
    margin: 'auto',
  },
}));

function Home() {
  const classes = useStyles();
  const { userSession } = useUserSessionContext();
  const greeting = userSession.xAuthToken
    ? `Hi, ${userSession.displayName}! 👋`
    : `Hi, stranger! 👽`;
  return (
    <main className={classes.container}>
      <Typography variant="h4">{greeting}</Typography>
    </main>
  );
}

export default Home;
