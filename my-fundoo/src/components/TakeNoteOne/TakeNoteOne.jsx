import React from 'react'
import './TakeNoteOne.css'
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import BrushIcon from '@mui/icons-material/Brush';
import PhotoIcon from '@mui/icons-material/Photo';

function Takenoteone(props) {
  return (
    <div className='mainDiv' onClick={() => props.takeNoteOne()}>
      <input id='textField' type="text" placeholder='Take a note...' />
      <div className='imgBlock'>
      <DomainVerificationIcon  />
      <BrushIcon />
      <PhotoIcon  />
      </div>
    </div>
  )
}

export default Takenoteone