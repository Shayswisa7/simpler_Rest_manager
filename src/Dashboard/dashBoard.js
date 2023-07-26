import React, { useEffect, useState } from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Business from '../components/Menu/Business/Business';
import EditClientWab from './EditClientWab';
import EditProducts from './EditProducts';
import EditUsers from './EditUsers';

const DashBoard = () => {
  const [edit, setEdit] = useState('עריכת מוצרים');
  const [editProducts] = useState('עריכת מוצרים');
  const [editClietbPage] = useState('עריכת אתר לקוחות');
  const [editUsers] = useState('עריכת משתמשים');
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown
              title={edit}
              id="basic-nav-dropdown"
              className="Dropdown"
            >
              <NavDropdown.Item onClick={() => setEdit(editClietbPage)}>
                {editClietbPage}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setEdit(editProducts)}>
                {editProducts}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setEdit(editUsers)}>
                {editUsers}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {edit === 'עריכה' ? (
        <p>דף עריכות</p>
      ) : edit === 'עריכת אתר לקוחות' ? (
        <EditClientWab />
      ) : edit === 'עריכת מוצרים' ? (
        <EditProducts />
      ) : (
        <EditUsers />
      )}
    </React.Fragment>
  );
};

export default DashBoard;
