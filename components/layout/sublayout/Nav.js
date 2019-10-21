import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import DeviceHub from '@material-ui/icons/DeviceHub';
import DynamicFeed from '@material-ui/icons/DynamicFeed';
import { useLayoutContext } from './../LayoutContext';

const useStyles = makeStyles(theme => ({
  root: {},
  menu: { width: theme.typography.pxToRem(240) },
}));

function Nav() {
  const classes = useStyles();
  const { navMenuIsOpen, toggleNavMenu } = useLayoutContext();

  const toggleDrawer = React.useCallback(
    event => {
      const ignorableKeyDown = event.key === 'Tab' || event.key === 'Shift';
      const shouldNotToggle = event.type === 'keydown' && ignorableKeyDown;
      if (!shouldNotToggle) toggleNavMenu();
    },
    [toggleNavMenu],
  );

  return (
    <div className={classes.root}>
      <Drawer open={navMenuIsOpen} onClose={toggleDrawer}>
        <NavMenu className={classes.menu} toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
}

export default Nav;

/**
 * @private Component
 * Renders the nav menu options
 */
function NavMenu({ className, toggleDrawer }) {
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
