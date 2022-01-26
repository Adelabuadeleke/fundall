import React, {useEffect, useState} from 'react'
import './Dashboard.css'
import {Avatar} from "@material-ui/core";
import {LinearProgress} from  "@material-ui/core";
import {TextField} from '@material-ui/core';
import { Button } from '@material-ui/core';
import{FiberManualRecord}  from "@material-ui/icons";
import styled from "styled-components";
import { useStateValue } from './StateProvider';
import request from './requests'
import axios from "./axios";

function Dashboard() {
  const [{user}] = useStateValue();
  // const[userdata, setUserdata] = useState([]);
  // const CustomBorderTextField = styled(TextField)

//   useEffect(()=>{
//     async function fetchdata() {
//       const data = await axios.get(request.fetchUser);
//       console.log(data);
//       setUserdata(data.success);
//       return data;
//     }  
//     fetchdata();
// });

  return (
    <div className='dashboard'>
      <div className="body__contents">
        <div className="body__inner">
          <nav>
            <img src="https://res.cloudinary.com/adelabuadeleke/image/upload/v1642216058/Group_24.1_rgkcrc.png" alt="fundall_logo" />
          </nav>

          <div className="inner__contents">
            <div className="dashboard__first">
              <div className="user__details">
                <Avatar className="avatar" src={user?.avatar} style={{height:"80px", width:"80px", borderRadius:"10px", color: "#000000" }}/>
                <div className="div__details">
                  <h1>{user?.lastname} {user?.firstname}</h1>
                  <p>{user?.email}</p>
                </div>
              </div>
              <div className="user__target">
                <p>Target  Monthly Expenses</p>
                <h1>&#x20A6; {user?.monthly_target}</h1>
                <LinearProgress  variant='determinate' value="30" style={{borderRadius: "5px", height: "10px", backgroundColor:"#efefef" }} />
              </div>
              <div className="user__expenses">
                <p>Daily Expenses Summary</p>
                <div className="summary_div">
                  <div className='title'>
                    <p>Date</p>
                    <p>Amount</p>
                  </div>
                  <div className="summary_text">
                    <div className="text__cont">
                      <FiberManualRecord style={{fontSize:"1rem", marginRight:"10px", color:"#4de897"}} /> 
                      <p>30 Nov, 2021</p>
                    </div>
                    
                    <p className='amount'><span>&#x20A6;30,000</span>  </p>
                  </div>

                  <div className="summary_text">
                    <div className="text__cont">
                      <FiberManualRecord style={{fontSize:"1rem", marginRight:"10px", color:"#4de897"}}/> 
                      <p>25 Nov, 2021</p>
                    </div>

                    
                    <p className='amount'> <span>&#x20A6;30,000</span> </p>
                  </div>

                  <div className="summary_text">
                    <div className="text__cont">
                      <FiberManualRecord style={{fontSize:"1rem", marginRight:"10px", color:"#4de897"}}/> 
                      <p>30 Oct, 2021</p>
                    </div>

                   
                    <p className='amount'><span>&#x20A6;30,000</span>  </p>
                  </div>
                </div>
               </div>

            </div>

            <div className="dashboard__second">
                <div className="input__header">
                  <div className='header__text'>
                    <h3><span>Welcome back,</span> {user?.firstname}</h3>
                    <p>Now let's get your expenses for this month</p>
                  </div>
                  
                  <img src='' alt=''  />
                </div>
                
                <TextField label="Target Montly expenses"  variant="outlined" type="number" placeholder="Target Montly expenses" style={{width:'100%', marginBottom:"20px"}} />
                <TextField variant="outlined" type="date"  style={{width:'100%', marginBottom:"20px"}}/>

                <div className='expenses__input'>
                  <p>Today's Expenses</p>
                 <div className="expenses__div">
                   <TextField label=""  variant="outlined" type="text" placeholder="Enter Item"   />
                   <TextField label=""  variant="outlined" type="number" placeholder="Price" /> 
                  </div>

                  <div className="expenses__div">
                    <TextField label=""  variant="outlined" type="text" placeholder="Enter Item" />
                    <TextField label=""  variant="outlined" type="number" placeholder="Price" />
                  </div>

                  <div className="expenses__div">
                    <TextField label=""  variant="outlined" type="text" placeholder="Enter Item" />
                    <TextField label=""  variant="outlined" type="number" placeholder="Price" />
                  </div>
                <div className='total__div'>
                  Toatal Actual Expenses:&#x20A6;<div className='total'></div>
                </div>
                <Button style={{
                    	backgroundColor: "#4de897",
                      color:"black",
                      fontWeight:"700",
                  }}>SAVE TODAY'S EXPENSES</Button>
               

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
