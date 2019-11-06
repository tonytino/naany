import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UserSession from './UserSession';
import { useLayoutContext } from '../../../contextes';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppBar() {
  const classes = useStyles();
  const { setLayout } = useLayoutContext();
  const openNavigation = React.useCallback(
    () => setLayout({ layout: { navIsOpen: true } }),
    [setLayout],
  );
  return (
    <div className={classes.root}>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open Navigation"
            onClick={openNavigation}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Mission Control 🚀
          </Typography>

          <UserSession />
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}

export default AppBar;
