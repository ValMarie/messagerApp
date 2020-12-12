import React, { useState } from 'react';
import { FaSyncAlt, FaPlus, FaEllipsisH } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const MyNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=" navbar " navbar>
            <NavItem>
              
            </NavItem>
            <NavItem>
              <NavLink href=""> <FaSyncAlt /> </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=""> <FaPlus /> </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav >
                 <FaEllipsisH />
              </DropdownToggle>
              <DropdownMenu left= "true">
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default MyNavBar;