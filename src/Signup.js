import React from 'react'
import  './Signup.css'

function Signup() {
  return (
    <div className="signup">
      <div className="body__contents">
        <div className="body__inner">
          <nav>
            <img src="https://res.cloudinary.com/adelabuadeleke/image/upload/v1642216058/Group_24.1_rgkcrc.png" alt="fundall_logo" />
            <div className="nav__content">
              <a href="/login"><p>LOG IN</p></a>
              <a href="/signup"><button>SIGN UP</button></a>
            </div>

          </nav>

          <div className="inner__contents signup__inner">
            <div className="img__div">
              <img src="https://res.cloudinary.com/adelabuadeleke/image/upload/v1642216130/Group_8_srsbd7.png" alt="illustration"/>
            </div>
            <h1 className='top'>Fundall Expense Tracker</h1>
            <p className='subtop'>Mini Frontend Project</p>
            <p className='myname'><b>by Adelabu Kamaldeen</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
