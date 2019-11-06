import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Home,
  DeviceHub,
  DynamicFeed,
  Lock,
  LockOpen,
} from '@material-ui/icons';
import { useLayoutContext, useUserSessionContext } from '../../../contextes';

const useStyles = makeStyles(theme => ({
  root: {},
  menu: { width: theme.typography.pxToRem(240) },
}));

function Nav() {
  const classes = useStyles();
  const { layout, setLayout } = useLayoutContext();
  const { userSession } = useUserSessionContext();

  const isAuthenticated = React.useMemo(_ => Boolean(userSession.xAuthToken), [
    userSession,
  ]);

  const toggleDrawer = React.useCallback(
    event => {
      const ignorableKeyDown = event.key === 'Tab' || event.key === 'Shift';
      const shouldNotToggle = event.type === 'keydown' && ignorableKeyDown;
      if (!shouldNotToggle) {
        setLayout(({ layout: { navIsOpen } }) => ({
          layout: {
            navIsOpen: false,
          },
        }));
      }
    },
    [setLayout],
  );

  return (
    <div className={classes.root}>
      <Drawer open={layout.navIsOpen} onClose={toggleDrawer}>
        <NavMenu
          className={classes.menu}
          isAuthenticated={isAuthenticated}
          toggleDrawer={toggleDrawer}
        />
      </Drawer>
    </div>
  );
}

export default Nav;

/**
 * @private Component
 * Renders the nav menu options
 */
function NavMenu({ className, toggleDrawer, isAuthenticated }) {
  return (
    <div
      className={className}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <Link href="/">
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link href="/protected">
          <ListItem button>
            <ListItemIcon>
              {isAuthenticated ? <LockOpen /> : <Lock />}
            </ListItemIcon>
            <ListItemText primary="Protected" />
          </ListItem>
        </Link>

        <Link href="/ssr">
          <ListItem button>
            <ListItemIcon>
              <DeviceHub />
            </ListItemIcon>
            <ListItemText primary="Server-Side" />
          </ListItem>
        </Link>

        <Link href="/dynamic">
          <ListItem button>
            <ListItemIcon>
              <DynamicFeed />
            </ListItemIcon>
            <ListItemText primary="Dynamic" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
