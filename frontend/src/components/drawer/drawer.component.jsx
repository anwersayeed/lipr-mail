import React, { useState } from 'react';
import Mail from '../Mails/mail.component';
import Header from '../header/header.component';
import Compose from '../compose/Compose';

import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core/';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ScheduleIcon from '@material-ui/icons/Schedule';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [composeComponent, setComposeComponent] = useState(false);
  const [scheduleComponent, setScheduleComponent] = useState(false);
  const [sentComponent, setSentComponent] = useState(false);

  const name = 'Ayush';
  const greeting = `Hello ${name}`;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            LIPR MAIL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem
              button
              key={greeting}
              onClick={(event) => console.log(event.target)}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={greeting} />
            </ListItem>
          </List>
          <List>
            <ListItem
              button
              key="Compose"
              onClick={() => setComposeComponent(!composeComponent)}
            >
              <ListItemIcon>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Compose" />
            </ListItem>
            <ListItem
              button
              key="Schedule Mail"
              onClick={(event) => console.log(event)}
            >
              <ListItemIcon>
                <ScheduleIcon />
              </ListItemIcon>
              <ListItemText primary="Schedule Mail" />
            </ListItem>
            <ListItem button key="SENT" onClick={(event) => console.log(event)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="SENT" />
            </ListItem>
            <ListItem
              button
              key="LOGOUT"
              onClick={(event) => console.log(event)}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="LOGOUT" />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {composeComponent ? <Mail /> : null}
      </main>
    </div>
  );
}
