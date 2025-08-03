import React from 'react'
import './Navbar.css'
// Import the images from assets 
import menu_icon from '../../Assets/menu.png'
import logo from '../../Assets/logo.png'
import search from '../../Assets/search.png'
import upload_icon from '../../Assets/upload.png'
import more_icon from '../../Assets/more.png'
import notification_icon from '../../Assets/notification.png'
import profile_icon from '../../Assets/jack.png'
import { Link } from 'react-router'




const Navbar = ({ setsidebar }) => {
    return (
        <nav className='flex-div'>
            {/* left side bar  */}
            <div className='nav-left flex-div'>

                {/*
                 Menu icon ke ander set karna prega setsidebar ko 
                 ospe click karenge to side bar hatna chiye
                  
                  ->Menu icon pe click karne ke bad home page khulna chiye */}
                <img className='menu-icon' src={menu_icon} alt='' onClick={()=>setsidebar(prev=>prev===false?true:false)}></img>
                <Link to='/'><img className='logo' src={logo} alt=''></img></Link>
            </div>

            {/* Middle nav bar  */}
            <div className='nav-middle flex-div'>
                <div className='search-box flex-div'>

                    <input type='text' placeholder='Search'></input>
                    <img src={search} alt=''></img>
                </div>
            </div>

            {/* Right nav-bar  */}
            <div className='nav-right flex-div'>
                <img src={upload_icon} alt=''></img>
                <img src={more_icon} alt=''></img>
                <img src={notification_icon} alt=''></img>
                <img src={profile_icon} alt='' className='user-icon'></img>
            </div>

        </nav>
    )
}

export default Navbar