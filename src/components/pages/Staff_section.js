import React from 'react';
import { Link } from 'react-router-dom';

// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import sidebar_menu_staff from './sidebar_menu_staff';
import './Staff_section.css'


function Staff_section() {
    return (
        <div >
        <section className='staff-main-body'>
            <img src="images/lawyer.avif" alt="" className='staff-sec-image'/>
            <div className="staff-nav">
            <h1 className='staff-question'>What would you like to do ?</h1>
                <div className="staff-btn-nav">
                 <div>
                 <button className="staff-nav-button">
                    File a New Case
                </button>
                <button className="staff-nav-button">Upcoming Hearing</button>
                </div>   
                <div>
                <button className="staff-nav-button">Past hearing</button>
                <button className="staff-nav-button">Upload Evidence</button>
                </div>
                
                </div>
            
                
            </div>
        </section>
        </div>
    )
}

export default Staff_section;