import React, { use, useState } from 'react'
import "../assets/Style9.css"

const Form = () => {
  const[username,setusername]=useState('');
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const[confirmpassword,setConfirmPassword]=useState('');


  ///showing error
  const[errorUserName,setErrorUserName]=useState('')
  const[erroremail,setErrorEmail]=useState('')
  const[errorPassword,setErrorPassword]=useState('');
  const[errorConfirmPassword,setErrorConfirmPassword]=useState('');
  
// showing color green or red
  const[userColor,setUserColor]=useState('');
  const[emailcolor,setEmailColor]=useState('');
  const[passowrdcolor,SetPasswordColor]=useState('')
  const[confirmPasswordColor,setConfirmPasswordColor]=useState('');


  const validate=(e)=>{
    e.preventDefault();
    if(username.length>8){
        setUserColor("green")
        setErrorUserName('')
    }
    else{
        setUserColor('red');
        setErrorUserName('Enter the nusername of 8 lettter')

    }
    if(email.includes("@")){
        setEmailColor("green");

    }
    else{
        setEmailColor("red");
        setErrorEmail("Enter vaild email");
    }
    if(password.length>8){
        setConfirmPasswordColor("green");
        
    }
    else{
      
        setErrorConfirmPassword('Enter 8 aplhanumeric password');
        setConfirmPasswordColor("red");
    }
    if(password !="" && password===confirmpassword){
        setConfirmPasswordColor("green");


    }
    else{

        setErrorConfirmPassword("Passowrd not matched ");
        setConfirmPasswordColor("red");
    }
  }




  return (
    <>
    <div className='card'> 
    <div className='card-image'></div>
      <form>
        <input type="text" value={username} onChange={e=>setusername(e.target.value)}  placeholder='enter user name' style={{borderColor:userColor}}/>
        <p className="error">{errorUserName}</p>

        <input type="email" value={email} onChange={e=>setemail(e.target.value)}  placeholder='Enter mail' style={{borderColor:emailcolor}}/>
        <p className="error">{ erroremail }</p>

        <input type='password' value={password} onChange={e=>setpassword(e.target.value)}  placeholder='Enter password' style={{borderColor:passowrdcolor}}/>
        <p className="error">{errorPassword}</p>

        <input type="password"  value={confirmpassword} onChange={e=>setConfirmPassword(e.target.value)} placeholder='ReEnter Password' style={{borderColor:confirmPasswordColor}}/>
        <p className="error">{errorConfirmPassword}</p>

        <button className='submit-btn' onClick={validate}>Sumbit</button>

      </form>
      </div>
      
    
    </>
  )
}

export default Form
