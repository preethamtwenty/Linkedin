import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';







function Post() {
    return (
        <div className="post">
        <div className="post_header">
        <Avatar className="post_avatar" alt="Remy Sharp" src="p.jpg" />
        <div className="post_user">
        <span className="post_username">Preetham Lekkala</span> <span className="post_user_number"> .1st</span>
        <div className="post_user_profile">Full Stack Developer</div>
        <div className="post_user_time">2d</div>
        </div>
        </div>

        <div className="post_body">
        Hello Guys Preetham here
        <img src="p.jpg" className="post_image"></img>
        </div>
        <div className="post_body_likes">
        <ThumbUpIcon className="like_icon"></ThumbUpIcon>
        <span className="no_of_comments">3 comments</span>
        
        </div>

        <div className="post_footer">
        <ThumbUpOutlinedIcon className="like__icon"/>

        <div className="post_footer_comment">
        <Avatar className="post_avatar_comment" alt="Remy Sharp" src="p.jpg" />
        <div className="comment_bar">
        <input className="comment_input" placeholder="add comment"></input>
        </div>
        
        </div>
        </div>
        </div>
        
    )
}

export default Post
