import * as React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from 'react-redux';
import { selectDrawerState } from '../store/selectors';
import { manageDrawer } from '../store/handleDrawer';

const drawerWidth = 240;


export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const dispatch = useDispatch();
    var drawerOpen = useSelector(selectDrawerState());

  const handleDrawer = () => {
    dispatch(manageDrawer())
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth
          }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        <div>
          <IconButton onClick={handleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem disablePadding>
            <RouterLink style={{ textDecoration: "none", color: "inherit" }} to="users">
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Utilisateurs'} />
              </ListItemButton>
              </RouterLink>

            </ListItem>
            <ListItem disablePadding>
            <RouterLink style={{ textDecoration: "none", color: "inherit" }} to="/">
              <ListItemButton>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary={'Acceuil'} />
              </ListItemButton>
              </RouterLink>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}