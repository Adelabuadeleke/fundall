import React, { useState } from 'react';
import './SignupInput.css'
import {TextField} from '@material-ui/core';
import { Button } from '@material-ui/core';
import styled from "styled-components";
import axios from './axios';
import request from "./requests"

function SignupInput() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setConfirmation] = useState('')


  const signUp = async (e) => {
    e.preventDefault();
  
    const details = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    }
  
    const feedback = await axios.post(request.fetchRegister, details)
    .then(result=>{
      console.log(result)
    })
    console.log('user logged in!')
  }

const CustomBorderTextField = styled(TextField)
`& label.Mui-focused {
    color: #4de897;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #4de897;
    }
  }
`;



  return (
    <div className="signupinput">
       <div className="body__contents">
        <div className="body__inner">
          <nav>
            <img src="https://res.cloudinary.com/adelabuadeleke/image/upload/v1642216058/Group_24.1_rgkcrc.png" alt="fundall_logo" />
            {/* <div className="nav__content">
              <p>LOG IN</p>
              <button>SIGN UP</button>
            </div> */}

          </nav>

          <div className="inner__contents">
            <div className="first__content">
              <div className="first__div">
                <img src="https://res.cloudinary.com/adelabuadeleke/image/upload/v1642216130/Group_8_srsbd7.png" alt="illustration"/>
                <h1><span>Welcome!</span> Let's get to know you.</h1>
                <p>Your first step toward a better financial lifestyle starts here.</p>
              </div>
            </div>
            <div className="second__content">
              <div className="form__div">
                <form>
                  <div className="name" >
                    <TextField 
                    label="First Name" 
                    style={{color:"#4de897", borderColor:"#4de897"}}
                    value={firstname}  
                    onChange={e => setFirstname(e.target.value)} 
                    variant="outlined" 
                    type="text" 
                    placeholder="First Name" />

                    <TextField 
                    label="Last Name" 
                    value={lastname}  
                    onChange={e => setLastname(e.target.value)}  
                    variant="outlined" 
                    type="text" 
                    placeholder="Last Name" />
                  </div>
                  
                  <div className="other">
                    <TextField 
                    label="Email Address"  
                    variant="outlined"
                    value={email}  
                    onChange={e => setEmail(e.target.value)} 
                    type="text" 
                    placeholder="Email Address" />

                    <TextField 
                    label="Password"  
                    variant="outlined"
                    value={password}  
                    onChange={e => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="Password" />

                    <TextField 
                    label="Confirm Password"  
                    variant="outlined" 
                    value={password_confirmation}  
                    onChange={e => setConfirmation(e.target.value)}
                    type="password" 
                    placeholder="Confirm Password" />
                  </div>
                  
                  <Button onClick={signUp} style={{
                    	backgroundColor: "#4de897",
                      color:"black",
                      fontWeight:"700",
                  }}>SIGN UP</Button>
                </form>
                <p className="login__here">Already have an account ?<a><span>Login Here</span></a></p>
              </div>
                <p className="terms">By clicking on Signup, you agree to our<a><span>Terms & Conditions and Privacy Policy</span></a> </p>
            </div>
            {/* <div className="img__div">
              <img src="https://res.cloudinary.com/adelabuadeleke/image/upload/v1642216130/Group_8_srsbd7.png" alt="illustration"/>
            </div> */}
            {/* <h1 className='top'>Fundall Expense Tracker</h1>
            <p className='subtop'>Mini Frontend Project</p>
            <p className='name'><b>by Adelabu Kamaldeen</b></p>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupInput
