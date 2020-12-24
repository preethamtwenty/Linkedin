import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
        <div className="header__">
        <img src="linkedin.png" className="header_logo"></img>
     
        <div className="header_searchbar">
        <SearchIcon className="search_icon"/>
        <input className="header_input" placeholder="Search"></input>
        
        </div>
        
      
        
        <div className="header__icons">
        <div className="header_icons">

        <div className="header_icon">
        <HomeIcon className="icon"/>
        <div className="icon_name">Home</div>
        </div>

        <div className="header_icon">
        <PeopleAltIcon className="icon"/>
        <div className="icon_name">Network</div>
        </div>

        <div className="header_icon">
        <WorkIcon className="icon"/>
        <div className="icon_name">Jobs</div>
        </div>

        <div className="header_icon">
        <ChatBubbleIcon className="icon"/>
        <div className="icon_name">Messaging</div>
        </div>

        <div className="header_icon">
        <NotificationsIcon className="icon"/>
        <div className="icon_name">Notification</div>
        </div>
        </div>
        

        
        </div>

        
        </div>
       
            
        </div>
    )
}

export default Header
