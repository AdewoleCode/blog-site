import React from 'react'
import {auth, provider} from '../Firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsAuth, isAuth}) => {

  const navigate = useNavigate()

  const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then(response => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      console.log(response)
      navigate('/')
    })
  }



  return (
    <div className='login-page'>
      <p>Sign in with Google to continue</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle} >Sign in with Google</button>
    </div>
  )
}

export default Login 