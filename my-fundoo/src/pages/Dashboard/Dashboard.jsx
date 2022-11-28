import React from 'react' 
import Header from '../../components/Header/Header'
import TakeNoteOne from '../../components/TakeNoteOne/TakeNoteOne'
import TakeNoteTwo  from '../../components/TakeNoteTwo/TakeNoteTwo'
import TakeNoteThree from '../../components/TakeNoteThree/TakeNoteThree'
import { getNotes } from '../../services/Dataservices'
import './Dashboard.css'
import SideDrawer from '../../components/Drawer/Drawer'
import { useState } from 'react'

function Dashboard() {
  const [notes,setNotes] = React.useState([])
  const [view,setView] = React.useState(true)
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [noteType,setNoteType] = useState('notes')
  
  const GetNotes= () => {
    
    getNotes().then((response)=>{
      console.log(response)
      const filterArray = response.data.data.data.filter((note) => {
        if(noteType === 'notes') {

       
        if(note.isArchived === false && note.isDeleted === false){
          return note;
        }
      }
      if(noteType === 'archive'){

      
        if(note.isArchived === true && note.isDeleted === false){
          return note;
        }
      }
      if(noteType === 'trash') {

     
        if(note.isArchived === false && note.isDeleted === true){
          return note;
        }
      }
      })
     
     
     setNotes(filterArray)
    })
    
    
  }
  React.useEffect(() => {GetNotes()}, [view,noteType])
    

  
  const takeNoteOne = () => {
      setView(!view)
  }

  const takeNoteTwo = () => {
    setView(!view)
}

  const listenToHeader = () => {
    setDrawerOpen(!drawerOpen)
  }
  const listenToSideNav = (noteChoice) => {
    setNoteType(noteChoice)
  }

  const mapNotes = notes.map((note,index) => <TakeNoteThree key={index} note={note} getNotes={GetNotes} />)

   return (
    <div className='maindiv-dashboard'>
        <div className='dashboard-header'><Header listenToHeader={listenToHeader} /></div>
        <SideDrawer drawerOpen={drawerOpen} listenToSideNav={listenToSideNav} />
        <div>
           {view ? <div className='subDiv-takenote1'><TakeNoteOne takeNoteOne={takeNoteOne}/></div> : <div className='subDiv-takenote2'>
            <TakeNoteTwo getNotes={GetNotes} takeNoteTwo={takeNoteTwo}/></div>}
        </div>
        <div className='takenote3'>{mapNotes}</div>
    </div>
  )
}

export default Dashboard