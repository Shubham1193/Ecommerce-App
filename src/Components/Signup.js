import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { auth, fs } from '../Config/Config';
import {useNavigate} from 'react-router-dom';

const Signup = () => {

    let navigate = useNavigate();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, seterrorMsg] = useState('');
    const [successmsg, setSuccessMsg] = useState('');

    const handleSignup=(e)=>{
        e.preventDefault()
        // console.log(fullname,email,password);
        auth.createUserWithEmailAndPassword(email,password)   //async task return promise
        .then((credentials) => {
            console.log(credentials);
            fs.collection('users').doc(credentials.user.uid).set({
                Fullname : fullname ,
                Email : email ,
                Password : password
            }).then(()=>{
                setSuccessMsg('Signup success')
                setFullname('')
                setEmail('')
                setPassword('')
                seterrorMsg('')
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/login')
                }, 2000);

            }).catch(
                (error) => {
                    seterrorMsg(error.message)
                }
            )
        })
        .catch((error) => {
            seterrorMsg(error.message)
        })
    }

    return (
        <div>
            <div className='container'>
                <br></br>
                <br></br>
                <h1>Sign Up</h1>
                <hr></hr>
                {successmsg && <> <div className='success-msg'>{successmsg}</div> <br></br> </>}
                <form className='form-group' autoComplete="off" onSubmit={handleSignup}>
                    <label>Full Name</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setFullname(e.target.value)} value={fullname}></input>
                    <br></br>
                    <label>Email</label>
                    <input type="email" className='form-control' required
                        onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    <br></br>
                    <label>Password</label>
                    <input type="password" className='form-control' required
                        onChange={(e) => setPassword(e.target.value)} value={password}></input>
                    <br></br>
                    <div className='btn-box'>
                        <span>Already have an account Login
                            <Link to="/login" className='link'> Here</Link></span>
                        <button type="submit" className='btn btn-success btn-md'>SIGN UP</button>
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

export default Signup