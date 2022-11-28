import React from 'react'
import './TakeNoteThree.css'
import PushPinTwoToneIcon from '@mui/icons-material/PushPinTwoTone';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorPopper from '../ColorPopper/ColorPopper'
import { UpdateArchive , updateEditNotes,UpdateTrash } from '../../services/Dataservices'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
// import img8 from '../takenotetwo/undo.png'
// import img9 from '../takenotetwo/redo.png'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Takenotethree(props) {

  const [open, setOpen] = React.useState(false);
  const [editNotes,setEditNotes] = useState({});

  const updateArchive = () => {
    let data= {
      noteIdList:[props.note.id],
      isArchived:true
    }
    UpdateArchive(data).then((response) =>props.getNotes())
    .catch((error) => console.log(error))
  }

  const updateTrash = () => {
    let data1 = {
      noteIdList:[props.note.id],
      isDeleted:true
    }
    UpdateTrash(data1).then((response) =>props.getNotes())
    .catch((error) => console.log(error))
  }
  
  const handleOpen = (note) => {
    console.log(note)
    setEditNotes(note)
    setOpen(true);
   
    
  } 
  const handleClose = () =>setOpen(false);
    
   
  

  const takeTitleEditNotes = (event) => {
    setEditNotes((prevState) => ({...prevState,title: event.target.value}));
  }
  const takeDescriptionEditNotes = (event) => {
    setEditNotes((prevState) => ({...prevState,description: event.target.value}));
  }

  const Submit = () => {
    let obj= {
      noteId:editNotes.id,
      title:editNotes.title,
      description:editNotes.description
    }
     updateEditNotes(obj)
      
      .then((resp) => {console.log(resp)})
      
      .catch((error) => {console.log(error)})
     

  }

  return (
   
        <div className='main-box-note3' style={{backgroundColor:props.note.color}}>
            <div className='title-box-note3' onClick={() => handleOpen(props.note)}>
                <div className='title-note3'>{props.note.title}</div>
               
                <PushPinTwoToneIcon/>
            </div>
            <div className='description-box' onClick={() => handleOpen(props.note)}>{props.note.description}</div>
            <div className='image-block-note3'>
                <AddAlertIcon />
               
                <GroupAddOutlinedIcon />
                
                <ColorPopper action="update" id={props.note.id} getNotes={props.getNotes}/>
                <ImageOutlinedIcon />
                <ArchiveOutlinedIcon  onClick={updateArchive} />
                <MoreVertOutlinedIcon />
                <DeleteOutlineIcon onClick={updateTrash} />
            </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            <input className='editnote-text' type='text' value={editNotes.title} onChange={takeTitleEditNotes} />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input className='editnote-text' type='text' value={editNotes.description} onChange={takeDescriptionEditNotes} />
            </Typography>
            <div className='icons-editnote'>
              <div className='subdiv-icons'>
              <AddAlertIcon />
              <GroupAddOutlinedIcon />
              <ColorPopper  />
              <ImageOutlinedIcon />
                        
              <ArchiveOutlinedIcon />
              <MoreVertOutlinedIcon />
              <img className='pic' src="" />
              <img className='pic' src="" />
            </div>
              
              <Button onClick={Submit}>Close</Button>
            </div>
           </Box> 
         
        
        </Modal>
      </div>
   
  )
}

export default Takenotethree