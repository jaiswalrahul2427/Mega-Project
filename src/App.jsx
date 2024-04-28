import './App.css'
import { useEffect, useState } from 'react';
import React from 'react'
import 'react-dom'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  // const [count, setCount] = useState(0)
  const [loading,setLoading]=useState(true);

  const dispatch=useDispatch()

  useEffect (()=>{
authService.getCurrentUser().then((userData)=>{
  if(userData){
    dispatch(login({userData}))
  }
  else{
    dispatch(logout())
  }
}).finally(()=>setLoading(false))
  },)
  
  return !loading ? (
    <div className='flex flex-wrap content-between min-h-screen text-blue-500 bg-gray-400'>
      <div className='block w-full'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
