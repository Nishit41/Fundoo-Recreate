import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
// import img2 from './keeplogo.png'
// import img3 from './keep.png'
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {connect} from 'react-redux';

function Header(props) {
  return (
    <div className='mainBox'>
        <div className='subBox1'>
            <MenuIcon onClick={props.listenToHeader} />
            <img className='img1' src=""/>
            <div>
            {
             props.title
            }
            </div>
          
        </div>
        
        <div className='subBox2'>
            <SearchIcon  />
            <input id='textarea' type="text" placeholder='Search' />
            
        </div>
        <div className='subBox3'>
            <RefreshIcon  />
            <ViewStreamIcon  />
            <SettingsIcon  />
        </div>
        <div className='subBox4'>
            <AppsIcon/>
           < AccountCircleIcon  />
        </div>
        
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        title: state.drawerReducer.title,
    };
};
export default connect(mapStateToProps)(Header);