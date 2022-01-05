// import * as React from 'react';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home'
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';
import { MenuItem, MenuList } from '@mui/material';
import { logoutUser } from '../../Utils/auth-fetch-utils';
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const history  = useHistory();
  const location = useLocation();

  const handleLogout = async (event: React.FormEvent) =>{
    event.preventDefault();
    await logoutUser();
    await history.push('/');
}

let homeTab = null;
  if(location.pathname === '/signup' || location.pathname === '/signin') { 
    homeTab = <>
      <MenuItem onClick={() => history.push('/')}>
        <HomeIcon/>
        <ListItemText>Home</ListItemText>
     </MenuItem>
     <Divider/>
    </>
  }

let activityTab = null;
  if(location.pathname === '/profile' || location.pathname === '/transaction') { 
    activityTab = <>
     <MenuItem onClick={() => history.push('/transaction')}>
    <PaidIcon/>
    <ListItemText>Money Move</ListItemText>
    </MenuItem>    
     <Divider/>
    </>
  }

  let profileTab = null;
    if(location.pathname === '/profile' || location.pathname === '/transaction') { 
      profileTab = <>
         <MenuItem onClick={() => history.push('/profile')}>
        <PersonIcon/>
        <ListItemText>Activity</ListItemText>
     </MenuItem>
     <Divider/>
      
      </>
    }

  let logoutTab = null;
  if(location.pathname === '/profile' || location.pathname === '/transaction') { 
    logoutTab = <>
     <MenuItem onClick={handleLogout}>
        <LogoutIcon/>
        <ListItemText>Logout</ListItemText>
     </MenuItem>
    </>
  
  }
  


  return (
  <>
   <MenuList sx={{width: drawerWidth}}>
     {homeTab}
     {activityTab}
     {profileTab}
     {logoutTab}
     </MenuList>
    </>
  );
}