import React , {useState} from 'react'
import {
    LightModeOutlined , 
    DarkModeOutlined , 
    SettingsOutlined ,
    ArrowDropDownOutlined , 
    Search , 
    Menu as MenuIcon 
} from '@mui/icons-material' ; 
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import {setMode} from '../state/index.js'
import profileImage from '../assets/profile.jpeg'
import { AppBar,
    Button,
    Box,
    Typography,
    IconButton,
    InputBase,
    Toolbar,
    Menu,
    MenuItem,
    useTheme, } from '@mui/material';

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const [anchorEl , setAnchorEl] = useState(null)
    const isOpen = Boolean(anchorEl)
    const handleClick = (event) => setAnchorEl(event)
    const handleClose = () => setAnchorEl(null) 
    console.log('this is anchorEl')
    console.log(anchorEl)
  return (
    <AppBar 
    sx = {{
        position : 'static' , 
        background : 'none' , 
        boxShadow : 'none' 
    }} >
        <Toolbar sx={{
            justifyContent : 'space-between' , 
        }}>
            {/* LEFT SIDE */}
            <FlexBetween>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon />
                </IconButton>
                <FlexBetween
                    backgroundColor= {theme.palette.background.alt}
                    borderRadius="9px"
                    gap="0.2rem"
                    p="0.1rem 0.3rem 0.1rem 1rem"
                >
                    <InputBase placeholder='Search...'/>
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>
            {/* RIGHT SIDE */}
            <FlexBetween gap="1.5rem">
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlined sx={{fontSize : "25px"}} />
                    ) : (<LightModeOutlined sx={{fontSize : "25px"}} />
                    )}
                </IconButton>
                <IconButton>
                    <SettingsOutlined/>
                </IconButton>

                <FlexBetween> 
                    <Button 
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                        onClick={handleClick} 
                        sx={{
                            display : 'flex' , 
                            justifyContent : "space-between" , 
                            alignItems : "center" , 
                            textTransform : 'none' , 
                            gap : '1rem'
                        }}
                    >
                        <Box
                            component="img"
                            alt="profile"
                            src={profileImage}
                            height="32px"
                            width="32px"
                            borderRadius="50%"
                            sx={{ objectFit: "cover" }}
                        />
                        <Box textAlign="left">
                        <Typography
                            fontWeight="bold"
                            fontSize="0.85rem"
                            sx={{ color: theme.palette.secondary[100] }}
                        >
                            {user.name}
                        </Typography>
                        <Typography
                            fontSize="0.75rem"
                            sx={{ color: theme.palette.secondary[200] }}
                        >
                            {user.occupation}
                        </Typography>
                        </Box>
                        <ArrowDropDownOutlined sx={{
                            color : theme.palette.secondary[300] , fontSize : "25px"
                        }} />
                    </Button>
                    <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}  keepMounted
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}  >
                        <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                </FlexBetween>
            </FlexBetween>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar