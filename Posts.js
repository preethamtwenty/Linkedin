import React,{useEffect, useState} from 'react';
import './Posts.css';
import Post from './Post';


import CreateIcon from '@material-ui/icons/Create';
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WorkIcon from '@material-ui/icons/Work';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import db from './firebase'
import { Dvr } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  modal: {
    
    alignItems: 'center',
   
    justifyContent: 'center ',
    marginTop:"50px",
    width:"100%",
    display:"flex"
    
    
   
   
    
  },
  paper: {
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius:"10px"
  },
}));


function Posts() {

    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [post_content,setPost_content]=useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendPost=(e)=>{
      e.preventDefault();
      db.collection('posts').add({
          displayName:"Preetham",
          post_content:post_content,


      })
      setPost_content("")
      setOpen(false)

  }
  
    return (
        <div className="posts">
        <div className="postcard">
        <div className="typebar" onClick={handleOpen}>
        <CreateIcon/>
        Start a post
        </div>
        <div className="post_icons">
        <div className="post_icon">
        <PhotoIcon className="photo_icon"/>
        <span className="icon_name">Photo</span>
        </div>

        <div className="post_icon">
        <VideoLibraryIcon className="video_icon"/>
        <span  className="icon_name">Video</span>
        </div>

        <div className="post_icon">
        <WorkIcon className="work_icon"/>
        <span  className="icon_name">Job</span>
        </div>

        <div className="post_icon">
        <ReceiptIcon className="article_icon"/>
        <span  className="icon_name">Article</span>
        </div>
     
        
      
   
        </div>
        </div>
       

        <Post/>
        
        
        <div>

        
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper} id="modal">
              <div className="modal_header">
              <div id="transition-modal-title" className="modal_heading">Create a post</div>
              <CloseIcon className="modal_close_icon" onClick={handleClose}></CloseIcon>
              
              </div>
              
              <div  className="modal_body" id="transition-modal-description">
              
              <div className="modal__body__header">
              <Avatar className="modal_avatar" alt="Remy Sharp" src="p.jpg" />
              <div className="modal_username">Preetham Lekkala</div>
              </div>

              <div className="modal__body__body">
              <textarea className="modal_body_textarea" onChange={e=>setPost_content(e.target.value)} value={post_content} placeholder="What do you want to talk about?"/>
              
              </div>
              <div className="modal_footer">
              <PhotoIcon className="modal_photo_icon"></PhotoIcon>
              <button onClick={sendPost} className="submit_modal" type="submit">Post</button>
              </div>
              
              
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
      

        
        </div>
    )
}

export default Posts
