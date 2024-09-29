import React, { useRef, useState } from 'react'
import Header from './Header'
import { validation } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase-config';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const isFormValidated = () => {
        const message = validation(email.current.value, password.current.value, fullName?.current?.value)
        setErrorMessage(message);
        
        if(message) return;

        if(!isSignInForm){
            // Sign Up Logic goes into this
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    console.log(userCredential);
                })
                .catch((error) => {
                    console.log('ERROR ::: ', error.code, error.message)
                    setErrorMessage(error.code + "-" + error.message)
                })
        }else{
            //Sign In Logic goes into this 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    console.log(userCredential);
                    setErrorMessage('LoggedIn Successfully')
                })
                .catch((error) => {
                    console.log('ERROR :: ', error.message);
                    setErrorMessage(error.message);
                })
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
         
    }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref = {fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className='text-red-500 text-lg my-2 mx-2 font-bold'>{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={isFormValidated}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  )
}

export default Login