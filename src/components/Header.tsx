import React from 'react'
import {AppBar, Typography, Tabs, Tab, Button, Toolbar, useTheme, useMediaQuery} from '@mui/material'
import { NavbarWrapper } from '../styles/Styles.modules';
import {DrawerContainer} from './DrawerContainer';
import { NavLink } from 'react-router-dom';


//provide name of pge + link that match with App component( they are from react-dom)
export const menuItems = [
    {name:"Home", link:"/"},
    {name:"Now Playing",link:"now_playing"},
    {name:"Popular",link:"popular"},
    {name:"Tv Shows", link: "tv_shows"}

]

const Header = () => {
    const themes = useTheme();
    const isMatching = useMediaQuery(themes.breakpoints.down("md"));
    return(
        <div>
            <NavbarWrapper>
                <AppBar sx={{padding:"5px",backgroundColor:"#063970"}}>
                    <Toolbar>
                        
                        <Typography className="logo"> Cinematica
                        </Typography>
                            {isMatching? (
                               <DrawerContainer/> 
                            ) :(
                                <>
                                <div className="navLinks">
                                    {menuItems.map((nav,index)=>(
                                        <NavLink to={nav.link} key={index} style={{ color: "#fff", textDecoration: "none" }}>

                                     <Tab className="links" label={nav.name} key = {index}/>
                                        </NavLink>
                            ))}
                                </div>
                                    <Button className="loginBtn"
                                    variant="contained" color="info">Login</Button>

                                </>
                            )}

                     
                        
                    
                    </Toolbar>

                </AppBar>
               
            </NavbarWrapper>
        </div>
    )
}

export default Header