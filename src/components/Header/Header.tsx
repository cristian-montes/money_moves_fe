import Divider from '@mui/material/Divider';
import { menuDiv, iconStyle } from './HeaderStyles'
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
  if(location.pathname === '/signup' || location.pathname === '/signin' || location.pathname === '/') { 
    homeTab = <div>
      <MenuItem onClick={() => history.push('/')}>
        <HomeIcon style={iconStyle}/>
        <ListItemText>Home</ListItemText>
     </MenuItem>
     <Divider/>
    </div>
  }

let activityTab = null;
  if(location.pathname === '/profile' || location.pathname === '/transaction') { 
    activityTab = <div>
                    <MenuItem onClick={() => history.push('/transaction')} aria-labelledby="Navigate to make a transaction.">
                      <PaidIcon style={iconStyle}/>
                        <ListItemText>Money Moves</ListItemText>
                    </MenuItem>    
                    <Divider/>
                  </div>
  }

  let profileTab = null;
    if(location.pathname === '/profile' || location.pathname === '/transaction') { 
      profileTab = <div>
                    <MenuItem onClick={() => history.push('/profile')} aria-labelledby="Navigate to your activity.">
                      <PersonIcon style={iconStyle}/>
                        <ListItemText>Activity</ListItemText>
                    </MenuItem>
                    <Divider/>
                  </div>
    }

  let logoutTab = null;
  if(location.pathname === '/profile' || location.pathname === '/transaction') { 
    logoutTab = <div>
                  <MenuItem onClick={handleLogout} aria-labelledby="Logout">
                      <LogoutIcon style={iconStyle}/>
                      <ListItemText>Logout</ListItemText>
                  </MenuItem>
                </div>
  }
  


  return (
  <div style={menuDiv}>
   <MenuList sx={{width: drawerWidth}}>
     {homeTab}
     {activityTab}
     {profileTab}
     {logoutTab}
     </MenuList>
    </div>
  );
}