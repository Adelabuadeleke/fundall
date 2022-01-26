import React, {useState} from 'react'
import './Login.css'
import {TextField} from '@material-ui/core';
import { Button } from '@material-ui/core';
import styled from "styled-components";
import axios from "./axios";
import request from "./requests";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

const signIn = async ()=>{
 
  const details ={
    email: email,
    password:password
  }

  const result = await axios.post(request.fetchAuth, details)
  .then(result=>{
    console.log(result.data.success.user)
    dispatch({
      type:actionTypes.SET_USER,
      user:result.data.success.user,
    })
  })
  console.log('user logged in!')
}


  return (
    <div className='login'>
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
                <img src="https://res.cloudinary.com/adelabuadeleke/image/upload/v1642305969/Group_kmotk2.png" alt="illustration"/>
                <h1><span>Welcome back!</span></h1>
                <h1>We miss you.</h1>
              </div>
            </div>
            

            <div className="second__content">
              <div className="form__div">
                <div className="holla">
                  <h1>Holla</h1>
                  <p>Sign in to the vibe!</p>
                </div>
               
                <form>
                  <TextField
                  label="Email Address"
                  value={email}  
                  onChange={e => setEmail(e.target.value)}
                  variant="outlined" 
                  type="text" 
                  placeholder="Email Address" 
                  className="custom" />

                  <TextField
                   label="Password" 
                   value={password} 
                   onChange={e => setPassword(e.target.value)}
                   variant="outlined"
                   type="password" 
                   placeholder="Password" 
                   className="custom" />
                
                  <Button onClick={signIn} style={{
                    	backgroundColor: "#4de897",
                      color:"black",
                      fontWeight:"700",
                  }}>LOGIN</Button>
                </form>
               <p className="login__here">Don't have an account ? <a href="/register"><span>Register Here</span></a></p>
                <p className="terms">By clicking on Login, you agree to our <a href=''><span>Terms & Conditions and Privacy Policy</span></a></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
