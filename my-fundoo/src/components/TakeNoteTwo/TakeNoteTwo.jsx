import React, { useState } from 'react'
import './TakeNoteTwo.css'
import PushPinTwoToneIcon from '@mui/icons-material/PushPinTwoTone';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
// import img8 from './undo.png'
// import img9 from './redo.png'
import { addNote } from '../../services/Dataservices'
import ColorPopper from '../ColorPopper/ColorPopper'
import { ClickAwayListener } from '@mui/material'

export const UserContext = React.createContext
export const ChannelContext = React.createContext

function Takenotetwo(props) {
    const[takeNote2Obj, setTakeNote2Obj] = useState({title: '', description: '',color: '',isArchived: false});

    const takeTitle = (event) => {
      setTakeNote2Obj((prevState) => ({...prevState,title: event.target.value}));
    }
    const takeDescription = (event) => {
      setTakeNote2Obj((prevState) => ({...prevState,description: event.target.value}));
    }
    const submit = () => {
      props.takeNoteTwo();
      addNote(takeNote2Obj)
      
      .then((resp) => {props.getNotes()})
      
      .catch((error) => {console.log(error)})

    }

    const takeColor = (color) => {
      setTakeNote2Obj((prevState) => ({...prevState,color: color}));
    }

  return (
    <ClickAwayListener onClickAway={props.takeNoteTwo}>
        <div className='MainDiv' style={{backgroundColor:takeNote2Obj.color}}>
            <div className='subDiv'>
            <input onChange={takeTitle} id='text-one' type="text" placeholder='Title' style={{backgroundColor:takeNote2Obj.color}} />
           
            <PushPinTwoToneIcon/>
            </div>
            <div className='subDiv1'>
            <input onChange={takeDescription} id='text-two' type="text" placeholder='Take a note...' style={{backgroundColor:takeNote2Obj.color}} />
            </div>
            
            <div className='subDiv2' >
                <div className='imgBlock1'>
                    <AddAlertIcon />
                    <GroupAddOutlinedIcon />
                    
                     <ColorPopper takeColor={takeColor} action="create"/>
                    
                    <ImageOutlinedIcon />
                    
                    <ArchiveOutlinedIcon />
                    <MoreVertOutlinedIcon />
                    <img className='pic' src="" />
                    <img className='pic' src= " " />
                </div>
                <button onClick={submit} id='btn'>close</button>
            </div>
        </div>
     </ClickAwayListener>
  )
}

export default Takenotetwo