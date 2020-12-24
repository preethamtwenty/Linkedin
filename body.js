import React from 'react';
import './body.css';
import Profile from './Profile';
import Posts from './Posts';
import News from './News';

function body() {
    return (
        <div className="body">
            <div className="body_left">
            <Profile/>
            
            </div>

            <div className="body_posts">
            <Posts/>
            
            </div>

            <div className="body_right">
            <News/>
            
            </div>
        </div>
    )
}

export default body
