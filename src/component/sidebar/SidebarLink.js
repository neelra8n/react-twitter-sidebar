import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles ({
    link: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft:'2em',
        cursor: 'pointer',
        borderRadius: '20px',
        '&:hover': {
            backgroundColor: '#e8f5Fe',
            color: '#50b7f5',
            transition: 'color 100ms ease-out'
        }
      },
      icon: {
          padding: '0 8px',
          marginLeft: '-20px'
      }
    
})



const SidebarLink = ({text, Icon}) => {
    const classes = useStyles();
    return (
        <Box 
        className={classes.link}
        >   
            <Icon className={classes.icon}/>
            <h3>{text}</h3>
        </Box>
    )
}

export default SidebarLink;