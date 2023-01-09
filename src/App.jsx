import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LaunchList from './LaunchList'
import Details from './Details'

function App() {
  
  return (
    <div className="p-0 m-0">

    <BrowserRouter>
      <Routes>
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/" element={<LaunchList/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
