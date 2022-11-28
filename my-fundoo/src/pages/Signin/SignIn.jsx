import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Signin.css'
import { SignIn } from '../../services/UserServices'

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signin() {
    const [regexObj, setRegexObj] = React.useState({
        emailBorder: false,
        emailHelper: "",
        passwordBorder: false,
        passwordHelper: "",
    });
    const [signinObj, setSigninObj] = React.useState({ email: "", password: "" });


    const takeEmail = (event) => {
        setSigninObj((prevState) => ({ ...prevState, email: event.target.value }));
    };

    const takePassword = (event) => {
        setSigninObj((prevState) => ({ ...prevState, password: event.target.value }));
    };
    const submit = () => {
        let emailTest = emailRegex.test(signinObj.email);
        let passwordTest = passwordRegex.test(signinObj.password);
        if (emailTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "enter correct email",
            }));
        } else if (emailTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: false,
                emailHelper: "",
            }));
        }
        if (passwordTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "enter correct password",
            }));
        } else if (passwordTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        } else if (passwordTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }

        if (emailTest === true && passwordTest === true) {
            SignIn(signinObj)
                .then((resp) => { console.log(resp); localStorage.setItem('token', resp.data.id) })
                .catch((error) => { console.log(error) })
        }
    };
    return (
        <div className='main-box'>
            <div className='sub-box'>
                <img id='image1' src="data:image/png;base64,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" />
                <p className='sign-in'><b>Sign in</b></p>
                <p className='use-google'>Use your Google Account </p>




                <TextField className='textfield'
                    id="outlined-basic"
                    error={regexObj.emailBorder}
                    onChange={takeEmail}
                    helperText={regexObj.emailHelper} label="Email"
                    variant="outlined"

                    size='small' />
                <p className='forgot-email'>Forgot email?</p>


                <TextField className='textfield'
                    id="outlined-basic"
                    error={regexObj.passwordBorder}
                    onChange={takePassword}
                    helperText={regexObj.passwordHelper}
                    label="Password"
                    variant="outlined"

                    size='small' />


                <div className='sub-box3'>
                    <p className='textarea'>Not your computer? Use Guest mode to sign in privately.<br /><span id='learn-more'>Lear
                        n more</span></p>

                </div>
                <div className='button-box'>
                    <p className='create-account'>Create account</p>
                    <Button variant="contained" onClick={submit}>Next</Button>
                </div>
            </div>
        </div>

    )
}

export default Signin