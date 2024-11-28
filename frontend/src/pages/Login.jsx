// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {

//   const [currentState,setCurrentState] = useState('Sign Up');
//   const {token, setToken, backendUrl} = useContext(ShopContext)

//   const [name,setName] = useState('')
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')

//   const navigate = useNavigate();  

//   const onSubmitHandler = async (event) => {
//       event.preventDefault();
//       try {
//         if (currentState === 'Sign Up') {
//           const response = await axios.post(backendUrl + '/api/user/register',{name,email,password});
//           if (response.data.success) {
//             setToken(response.data.token);
//             localStorage.setItem('token',response.data.token)
//           } else {
//             toast.error(response.data.message)
//           }

//         } else {
//            const response = await axios.post(backendUrl + '/api/user/login', {email,password})
//            if (response.data.success) {
//             setToken(response.data.token)
//             localStorage.setItem('token',response.data.token)
//            } else {
//             toast.error(response.data.message || 'User Signed Up Successfully ');
//            }
//         }

//       } catch (error) {
//         console.log(error);
//         toast.error(error.message)
//       }

//       useEffect(() => {
//       if (token) {
//         navigate('/')
//       }
//     },[token])

//   }

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//       <div className='inline-flex items-center ga-2 mb-2 mt-10'>
//         <p className='prata-regular text-3xl'>{currentState}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
//       </div>
//       {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
//       <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
//       <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
//         <div className='w-full flex justify-between text-sm mt-[-8px]'>
//           <p className='cursor-pointer'>Forget your password?</p>
//           {
//             currentState === 'Login'
//             ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Creat account</p>
//             : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
//           }
//         </div>
//         <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
//     </form>
//   )
// }

// export default Login


import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, backendUrl } = useContext(ShopContext);

  // to store input fields data from login /signup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
        if (currentState === "Sign Up") {
            const response = await axios.post(backendUrl + "/api/user/register", { name, email, password });
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                console.log("Token after sign up:", response.data.token);
                toast.success(response.data.message || 'User Signed Up Successfully'); // Show success message
                // Navigate immediately to check if this works
                navigate('/');
            } else {
                toast.error(response.data.message); // Show error message if the response indicates failure
                
              }
        } else {
            const response = await axios.post(backendUrl + '/api/user/login', { email, password });
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                console.log("Token after login:", response.data.token);
                toast.success(response.data.message || 'User Logged In Successfully'); // Show success message
                // Navigate immediately to check if this works
                navigate('/');
            } else {
                toast.error(response.data.message); // Show error message if the response indicates failure
            }
        }
    } catch (error) {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message) {
            // Show the server-provided error message
            toast.error(error.response.data.message);
        } else {
            // Show a generic error message if no specific message is provided
            toast.error("An error occurred. Please try again.");
        }
    }
};

useEffect(() => {
  if (token) {
    navigate('/'); // Navigate to home page when token is set
  }
}, [token, navigate]); // Add navigate as a dependency

  
  return (<>
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Password ?</p>
        {
          currentState === 'Login' ? 
          <p className='cursor-pointer' onClick={()=> setCurrentState('Sign Up')}>Create account</p> : 
          <p className='cursor-pointer' onClick={()=> setCurrentState('Login')}>Login here</p>
        }
      </div>
      <button className='bg-gray-900 text-white font-light px-8 py-2 mt-4 hover:bg-black'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
    </>)
}

export default Login