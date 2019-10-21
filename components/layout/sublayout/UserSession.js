import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

function UserSession() {
  const classes = useStyles();
  const parentEl = React.useRef();

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const toggleMenu = React.useCallback(
    _ => {
      anchorEl ? setAnchorEl(null) : setAnchorEl(parentEl.current);
    },
    [anchorEl, setAnchorEl, parentEl.current],
  );

  const toggleSession = React.useCallback(
    _ => {
      setIsAuthenticated(prevState => !prevState);
      toggleMenu();
    },
    [setIsAuthenticated, toggleMenu],
  );

  return (
    <div ref={parentEl} className={classes.root}>
      {isAuthenticated ? (
        <UserSessionMenu
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          toggleSession={toggleSession}
        />
      ) : (
        <Button
          aria-label="Login Button"
          className={classes.menuButton}
          color="inherit"
          onClick={setIsAuthenticated}
        >
          Login
        </Button>
      )}
    </div>
  );
}

export default UserSession;

/**
 * @private Component
 * Renders the user session menu
 */
function UserSessionMenu({
  anchorEl = null,
  isMenuOpen = false,
  toggleMenu = () => {},
  toggleSession = () => {},
}) {
  return (
    <React.Fragment>
      <Button
        aria-label="Account of Current User"
        aria-controls="user-session-menu"
        aria-haspopup="true"
        onClick={toggleMenu}
        color="inherit"
      >
        <AccountCircle />
        <span style={{ paddingLeft: '8px' }}>Hi, Anthony 👋</span>
      </Button>

      <Menu
        id="user-session-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={toggleMenu}
      >
        <MenuItem onClick={() => alert('Haha, just kidding')}>
          Dark Mode
        </MenuItem>
        <MenuItem onClick={toggleSession}>Sign Out</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
