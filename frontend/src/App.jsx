import {Route,Routes} from 'react-router-dom'
import './App.css'
import { HomePage } from './page/HomePage.jsx'

import { useEffect, useState } from 'react'
import { Loader } from './loader.jsx';

function App() {
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
      },2000)
  },[])

  return (
    <>
      <div className='App'>
      {loading ? (<Loader/>):
      <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      
      
      }
      </div>
        
    </>
  )
}

export default App
