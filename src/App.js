import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './components/Main';
import Support from './components/pages/Support';
import Footer from './components/Footer';
import Citizen_section from './components/pages/Citizen_section';
import SignUp from './components/pages/SignUp';
import Staff_section from './components/pages/Staff_section';
import Legal_database from './components/pages/Legal_database';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/citizen-section' element={<Citizen_section />} />
        <Route path='/staff-section' element={<Staff_section/>} />
        <Route path='/legal-database' element={<Legal_database />}/>
        <Route path='/support' element={<Support />} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;
