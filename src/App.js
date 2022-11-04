import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './Home';
import { Contact } from './Contact';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

    <footer className="footer">
      <div className="footer-container">
        <div className="flex"><img className="fimg" src="images/zintern.svg" alt="Avatar" /></div>
        <div className="flex"><p className="footertext">HNG Internship 9 Frontend Task</p></div>
        <div className="flex"><img className="fimg" src="images/i4g.svg" alt="Avatar" /></div>
      </div>
    </footer>
    </>
  );
}

export default App;
