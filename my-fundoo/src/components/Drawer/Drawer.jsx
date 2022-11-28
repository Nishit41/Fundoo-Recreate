import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Drawer.css';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {connect} from 'react-redux';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 function SideDrawer(props) {

  const theme = useTheme();

  const handleNotes = (typeOfNote) => {
    
    props.dispatch({type : `${typeOfNote}`})
    props.listenToSideNav(typeOfNote);
  };

  

  return (
    <Box sx={{ display: 'flex' }}>
      
      <Drawer variant="permanent" open={props.drawerOpen}>
        
        <List>
        
            <ListItem  disablePadding sx={{ display: 'block' }} >
              <ListItemButton onClick={() => handleNotes('notes')}>
                <ListItemIcon>
                <LightbulbOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={'Notes'} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => handleNotes('reminders')}>
                <ListItemIcon>
                <NotificationsNoneIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Reminders'}  />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => handleNotes('edit')}>
                <ListItemIcon>
                <ModeEditIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Edit labels'} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => {handleNotes('archive')}}>
           
              
                <ListItemIcon>
                
                
                <ArchiveOutlinedIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Archive'}  />
              </ListItemButton>
            </ListItem>
         
            <ListItem  disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => handleNotes('trash')}
              >
                <ListItemIcon
                
                >
                <DeleteOutlineIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Trash'}  />
              </ListItemButton>
            </ListItem>
         
            
         
        </List>
       
     
      </Drawer>
      
    </Box>
  );
}
export default connect()(SideDrawer);