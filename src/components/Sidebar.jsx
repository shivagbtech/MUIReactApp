import { Feedback, Group, Home, Inbox, ModeNight, Pages, Person2, Settings } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';

const Sidebar = ({setMode,mode}) => {
  return (
    <Box p={2} flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={'fixed'}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                {/* <Inbox /> */}
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Home">
              <ListItemIcon>
                {/* <Inbox /> */}
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Home">
              <ListItemIcon>
                {/* <Inbox /> */}
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                {/* <Inbox /> */}
                <Person2 />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                {/* <Inbox /> */}
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#Home">
              <ListItemIcon>
                {/* <Inbox /> */}
                <Feedback />
              </ListItemIcon>
              <ListItemText primary="Feedback" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Home">
              <ListItemIcon>
                {/* <Inbox /> */}
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==='light'?'dark':'light')}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
