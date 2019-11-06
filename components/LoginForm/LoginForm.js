import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { useUserSessionContext } from './../../contextes';

const AUTH_API_ENDPOINT = 'https://api.staging.eaze.tech/api/auth/signin';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    maxWidth: theme.typography.pxToRem(320),
    margin: 'auto',
  },
  title: {
    letterSpacing: theme.typography.pxToRem(1),
  },
  passwordInput: {
    marginBottom: theme.spacing(4),
  },
}));

function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { setUserSession } = useUserSessionContext();

  const AUTH_API_REQUEST_OPTIONS = React.useMemo(
    () => ({
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }),
    [email, password],
  );

  const classes = useStyles();

  const processSignInAttempt = React.useCallback(async () => {
    try {
      console.group('AUTHENTICATING');
      const request = new Request(AUTH_API_ENDPOINT, AUTH_API_REQUEST_OPTIONS);

      console.log('SUBMITTING REQUEST', request);
      const response = await fetch(request);
      console.log('RESPONSE RECEIVED', response);
      const json = await response.json();

      if (!response.ok) {
        alert(`Sorry, we were unable to authenticate you.`);
        throw json.message || 'API failed to provide a explaination.';
      } else {
        setUserSession({ userSession: json });
        Router.push('/');
      }
    } catch (error) {
      console.error('Failed to authenticate:', error);
    } finally {
      console.groupEnd();
    }
  }, [AUTH_API_ENDPOINT, AUTH_API_REQUEST_OPTIONS, setUserSession]);

  return (
    <Paper className={classes.container} elevation={3}>
      <Typography className={classes.title} variant="h5" gutterBottom>
        New Phone, Who Dis?
      </Typography>
      <TextField
        required
        label="Email"
        type="text"
        margin="normal"
        variant="outlined"
        autoFocus
        autoComplete="email"
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <TextField
        required
        label="Password"
        className={classes.passwordInput}
        type="password"
        margin="normal"
        variant="outlined"
        autoComplete="password"
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <Button
        color="primary"
        size="large"
        variant="contained"
        onClick={processSignInAttempt}
      >
        Login
      </Button>
    </Paper>
  );
}

export default LoginForm;
