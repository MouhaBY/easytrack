import * as React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';
import { selectDrawerState } from '../store/selectors';
import Logo from "../logo.svg"

const drawerWidth = 240;


export default function PersistentDrawerLeft() {
    var drawerOpen = useSelector(selectDrawerState());

    return (
        <Drawer
            sx={{ width: (drawerOpen ? drawerWidth : 0) }}
            variant="persistent"
            anchor="left"
            open={drawerOpen}
        >
            <div style={{ width: drawerWidth, height: 64 }}>
                <RouterLink style={{ textDecoration: "none", color: "inherit", width:'100%'}} to="/">
                    <div>
                        <img src={Logo} alt="Logo" className='logo-img'/>
                    </div>
                </RouterLink>
            </div>
            <Divider />
            <List >
                {/*<p style={{ textAlign:'center' }}>Suivi</p>*/}
                <ListItem disablePadding>
                    <RouterLink style={{ textDecoration: "none", color: "inherit", width:'100%'}} to="users">
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Kanban'} />
                        </ListItemButton>
                    </RouterLink>
                </ListItem>
                <ListItem disablePadding>
                <RouterLink style={{ textDecoration: "none", color: "inherit", width:'100%'}} to="users">
                <ListItemButton>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Etat du stock'} />
                </ListItemButton>
                </RouterLink>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <RouterLink style={{ textDecoration: "none", color: "inherit", width:'100%'}} to="users">
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Affecter Tag'} />
                        </ListItemButton>
                    </RouterLink>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <RouterLink style={{ textDecoration: "none", color: "inherit", width:'100%'}} to="users">
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Articles'} />
                        </ListItemButton>
                    </RouterLink>
                </ListItem>
                <ListItem disablePadding>
                <RouterLink style={{ textDecoration: "none", color: "inherit", width:'100%'}} to="users">
                <ListItemButton>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Lignes CMS'} />
                </ListItemButton>
                </RouterLink>
                </ListItem>
                <ListItem disablePadding>
                <RouterLink style={{ textDecoration: "none", color: "inherit", width:'100%'}} to="users">
                <ListItemButton>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Zones'} />
                </ListItemButton>
                </RouterLink>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <RouterLink style={{ textDecoration: "none", color: "inherit", width:'100%'}} to="users">
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Comptes'} />
                        </ListItemButton>
                    </RouterLink>
                </ListItem>
                <ListItem disablePadding>
                <RouterLink style={{ textDecoration: "none", color: "inherit", width:'100%'}} to="users">
                <ListItemButton>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Activités'} />
                </ListItemButton>
                </RouterLink>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <RouterLink style={{ textDecoration: "none", color: "inherit", width:'100%'}} to="users">
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Configurations'} />
                        </ListItemButton>
                    </RouterLink>
                </ListItem>
            </List>
            <Divider />
      </Drawer>
    );
}