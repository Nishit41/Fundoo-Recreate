import axios from 'axios'
const headerConfig={
    headers: {
        Authorization: localStorage.getItem('token')   
    }
}

export const addNote = (takeNote2Obj) => {
    
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',takeNote2Obj,headerConfig)
    return response;
}
export const getNotes = () => {
    
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',headerConfig)
   
    return response;
}
export const updateColour = (updatecolorObj) => {
    
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',updatecolorObj,headerConfig)
    return response;
}
export const UpdateArchive = (updatearchiveObj) => {
    
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',updatearchiveObj,headerConfig)
    return response;
}
export const updateEditNotes = (updateEditnoteobj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',updateEditnoteobj,headerConfig)
    return response;
}
export const UpdateTrash = (updatetrashObj) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',updatetrashObj,headerConfig)
    return response;
}