import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../store/authentication';
import { useNavigate } from 'react-router-dom';
import { selectContact, selectUserId } from '../store/selectors';
import { manageDrawer } from '../store/handleDrawer';


export default function Appbar() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector(selectUserId());
    const contact = useSelector(selectContact())
    const handleMenu = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const handleProfile = () => {
        handleClose();
        navigate('/users/'+userId);
    }

    const handleDisconnect = () => {
        handleClose();
        dispatch(logoutAction());
        navigate('/');
    }

    const handleDrawer = () => {
        dispatch(manageDrawer())
    }

    return (
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            easyTrack
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography variant="h6" component="div" sx={{ marginRight: 1 }}>
                {contact}
                </Typography>
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={true}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Mon profil</MenuItem>
                <MenuItem onClick={handleDisconnect}>Se déconnecter</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
  );
}
