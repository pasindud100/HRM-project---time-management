

import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
    return (
        <Nav className="flex-column p-3 sidebar">
            <h5 className="px-3">HRM Menu</h5>
            <hr/>
            <Nav.Link as={NavLink} to="/" className="mb-2" activeClassName="active-link">Dashboard</Nav.Link>
            <Nav.Link as={NavLink} to="/employee" className="mb-2" activeClassName="active-link">Employee</Nav.Link>
            <Nav.Link as={NavLink} to="/leave" className="mb-2" activeClassName="active-link">Leave</Nav.Link>
            <Nav.Link as={NavLink} to="/attendance" className="mb-2" activeClassName="active-link">Attendance</Nav.Link>
            <Nav.Link as={NavLink} to="/payroll" className="mb-2" activeClassName="active-link">Payroll</Nav.Link>
            <Nav.Link as={NavLink} to="/administration" className="mb-2" activeClassName="active-link">Administration</Nav.Link>
            <Nav.Link as={NavLink} to="/settings" className="mb-2" activeClassName="active-link">Settings</Nav.Link>
        </Nav>
    );
};

export default NavigationBar;
