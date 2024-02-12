import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from './utils/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from './utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)

    const dispatch = useDispatch();

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const toggleSignInForm  = ()=>{
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = ()=>{
        //Validate the form data
  
       const message =  checkValidData(email.current.value, password.current.value)
      
       if(message)return;




       if(!isSignInForm)
       {
      
          createUserWithEmailAndPassword(auth, email.current.value,  password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/39980672?v=4"
              }).then(() => {
                const {uid, email, displayName,photoURL} = auth.currentUser;
                dispatch(addUser({
                  uid:uid,
                  email:email,
                    displayName:displayName,
                    photoURL:photoURL
                    }));
        
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
        
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+":"+errorMessage)

              console.log(errorCode)
              
            });
        
       }
       else
       {
        signInWithEmailAndPassword(auth, email.current.value,  password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
   
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)

        });

       }
    }
  return (

    <div className="">
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background image"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="absolute  w-3/12  p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type="text" ref={name} placeholder='Name' className='p-2 my-2 w-full bg-gray-700'/>}
            
            <input type="text" placeholder='Email Address' ref={email} className='p-2 my-2 w-full bg-gray-700'/>
           
            <input type="password" placeholder='Paassword' ref={password} className='p-2 my-2 w-full bg-gray-700'/>
            <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>
            <button  className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer ' onClick={toggleSignInForm}> {isSignInForm?"New to Netflix? Sign Up now":"Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login