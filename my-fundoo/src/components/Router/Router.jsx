import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Signin from '../../pages/Signin/SignIn'
import Signup from '../../pages/Signup/Signup'
import Dashboard from '../../pages/Dashboard/Dashboard'
import Header from '../Header/Header';
import TakeNoteOne from '../TakeNoteOne/TakeNoteOne';
import TakeNoteTwo from '../TakeNoteTwo/TakeNoteTwo';
import TakeNoteThree from '../TakeNoteThree/TakeNoteThree';

function Router() {
  return (
    <div>
        <BrowserRouter >
                <Routes>
                    <Route exact path="/" element={Signin} />
                    <Route path="/SignUp" element={Signup} />
                    <Route path="/Dashboard" element={Dashboard} />
                    <Route path="/Header" element={Header} />
                    <Route path="/NoteOne" element={TakeNoteOne} />
                    <Route path="/NoteTwo" element={TakeNoteTwo} />
                    <Route path="/NoteThree" element={TakeNoteThree} />

                 </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router