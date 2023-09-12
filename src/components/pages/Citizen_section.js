import React from 'react';
import { Link } from 'react-router-dom';

// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import sidebar_menu_citizen from './sidebar_menu_citizen';


function Citizen_section() {
    return (
        <>
            {/* <sidebar_menu_citizen /> */}
            <ul>
                <li>
                    <Link>File A New Case</Link>
                </li>
                <li>
                    <Link></Link>
                </li>
                <li>
                    <Link>Add File</Link>
                </li>
                <li>
                    <Link>Add File</Link>
                </li>
            </ul>
        </>
    )
}

export default Citizen_section;