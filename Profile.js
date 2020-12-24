import React from 'react';
import './Profile.css';
import Avatar from '@material-ui/core/Avatar';

function Profile() {
    return (
        <div className="profile">
        <div className="profile__">
        <Avatar className="profile_avatar" alt="Remy Sharp" src="p.jpg" />
        <div className="profile_name">Preetham Lekkala</div>
        <div className="profile_work">Full Stack Developer</div></div>
        <div className="profile__connections"> 
        <div className="profile_connections">Connections
        <span className="profile_no_of_connections">120</span>
        </div>
        </div>
       
        
        
       


        </div>
    )
}

export default Profile
