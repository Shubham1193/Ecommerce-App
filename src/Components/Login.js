import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../Config/Config';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    let navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, seterrorMsg] = useState('');
    const [successmsg, setSuccessMsg] = useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
       // console.log(email,password)
       auth.signInWithEmailAndPassword(email,password)
       .then(()=>{
        setSuccessMsg("login in successfully . Redirecting to home page")
        setEmail('')
        setPassword('')
        seterrorMsg('')
        setTimeout(() => {
            setSuccessMsg('');
                navigate('/')
        }, 2000);
       })
       .catch(error => seterrorMsg(error.message))
    }


  return (
    <div>
        <div className='container'>
            <br></br>
            <br></br>
            <h1>Login</h1>
            <hr></hr>
            {successmsg && <> <div className='success-msg'>{successmsg}</div> <br></br> </>}
            <form className='form-group' autoComplete="off" onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" className='form-control' required
                onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label>Password</label>
                <input type="password" className='form-control' required
                onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='btn-box'>
                    <span>Don't have an account Signup
                    <Link to="/signup" className='link'> Here</Link></span>
                    <button type="submit" className='btn btn-success btn-md'>LOGIN</button>
                </div>
            </form>
            {
                    errorMsg && <>
                    <div className='error-msg'>{errorMsg}</div>
                    <br></br>
                    </>
                }
                
            </div>
    </div>
  )
}

export default Login