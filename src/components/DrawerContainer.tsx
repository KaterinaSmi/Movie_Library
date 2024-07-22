import React from 'react';
import {
    Drawer,
    IconButton,
    List,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { menuItems } from './Header';
import { NavLink } from 'react-router-dom';


export const DrawerContainer = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const drawerBtn = () => {
        setOpenDrawer(!openDrawer);
    };

    const CustomNavLink = styled(NavLink)(({theme}) =>({
        textDecoration: "none",
        color:theme.palette.text.secondary
    }))

    return (
        <>
            <Drawer open={openDrawer} onClose={drawerBtn} anchor="left">
                <List>
                    {menuItems.map((nav, index) => (
                        <CustomNavLink to={nav.link} key={index}>
                        <ListItemButton onClick={() => setOpenDrawer(false)}>
                            <ListItemIcon>
                                <ListItemText sx={{ color: "blue" }}>
                                    {nav.name}
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        </CustomNavLink>
                    ))}
                </List>
            </Drawer>
            <IconButton onClick={drawerBtn} sx={{ marginLeft: "auto", color: "whitesmoke" }}>
                <MenuIcon />
            </IconButton>
        </>
    );
};
