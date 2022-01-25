import { useState } from "react";

//library & method import
import { makeStyles } from "@material-ui/core";
import Box from '@mui/material/Box';
import { Menu, MenuItem  } from "@material-ui/core";
import { Button } from "@material-ui/core";




import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';




//icon imports
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


//component import
import SidebarLink from "./SidebarLink";


const useStyles = makeStyles({
    sidebar: {
        width: '250px',
        minWidth: '250px',
        padding: '20px 20px',
        margin: '20px auto 0 auto',
        boxShadow: '0 0 8px hsl(210 14% 90%)',
        position: 'absolute',
        top: '20px',
        left: '20px'
    },
    tweet: {
        width: '100%',
        height: '50px',
        backgroundColor: 'hsl(203, 89%, 64%)',
        borderRadius: '20px',
        color: 'white',
        fontWeight: '700',
        textTransform: 'inherit',
        marginTop: '20px',
        '&:hover' : {
            color: 'black'
        }
    },
    morelinks: {
        width: '100%',
        borderRadius: '20px',
        height: '60px',
        paddingLeft: '2em',
        justifyContent: 'unset',
        fontSize: 'medium',
        '&:hover': {
            backgroundColor: '#e8f5Fe',
            color: '#50b7f5',
            transition: 'color 100ms ease-out'
        }
    },
    moreIcon: {
        paddingTop: '8px',
        fontSize: 'medium',
        marginLeft: '-10px'
    }

})



const Sidebar = () => {
    const options = [
        {link: 'Bookmarks', icon: <BookmarkBorderOutlinedIcon fontSize='0px' />},
        { link: 'List', icon: <ListAltOutlinedIcon />},
        { link: 'Topic', icon: <ChatOutlinedIcon />},
        { link: 'Moments', icon: <OfflineBoltOutlinedIcon/> },
        { link: 'Newsletters', icon: <PostAddOutlinedIcon/> },
        { link: 'Twitter Ads', icon: <CallMadeOutlinedIcon/> },
        { link: 'Analytics', icon: <BarChartOutlinedIcon/> },
        { link: 'Settings', icon: <SettingsOutlinedIcon/> },
        { link: 'Help Center', icon: <HelpOutlineOutlinedIcon/> },
        { link: 'Display', icon: <BrushOutlinedIcon/> },
        { link: 'Keyboard shortcuts', icon: <AccessibilityNewOutlinedIcon/> },
    ]



    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <Box className={classes.sidebar}>
            <SidebarLink text="Home" Icon={HomeIcon} />
            <SidebarLink text="Explore" Icon={SearchIcon} />
            <SidebarLink text="Notification" Icon={NotificationsNoneIcon} />
            <SidebarLink text="Messages" Icon={MailOutlineIcon} />
            <SidebarLink text="Bookmark" Icon={BookmarkBorderIcon} />
            <SidebarLink text="Lists" Icon={ListAltIcon} />
            <SidebarLink text="Profile" Icon={PermIdentityIcon}/>
            <Button onClick={handleClick} id="moreLinks" className={classes.morelinks}>
                <MoreHorizIcon className={classes.moreIcon}/> <h3>More</h3>
            </Button>
            <Button id="tweet" className={classes.tweet} > 
                Tweet
            </Button>
            <Menu 
                id = "long-menu"
                open ={open}
                onClose = {handleClick}
            >
                {
                    options.map((option) => (
                        <MenuItem key = {option.link} onClick={handleClick}>
                            {option.icon} {option.link}
                        </MenuItem>
                    ))
                }
            </Menu>
        </Box>
    )
}

export default Sidebar;