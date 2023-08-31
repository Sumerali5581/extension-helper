import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap'
import {NavLink as ReactLink} from "react-router-dom"
import { useEffect, useState } from 'react'
import { getCurrentUserDetail, isLoggedIn } from '../auth'
const CustomNavbar=()=>{
    const [isOpen, setIsOpen]=useState(false)
const [login,setLogin]=useState(false)

const [user,setUser]=useState(undefined)

useEffect(()=>{
  setLogin(isLoggedIn())
  setUser(getCurrentUserDetail())
},[login])

    return(
        <div>
      <Navbar color="dark"
      dark
      expand="md"
      fixed=""
      className='px-4'
      >
        <NavbarBrand tag={ReactLink} to="/">Extension Helper</NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavItem className='pt-2'>
              <NavLink tag={ReactLink} to="/">Home</NavLink>
            </NavItem>
            <NavItem className='pt-2'>
              <NavLink tag={ReactLink} to="/about">About</NavLink>
            </NavItem>
            <NavItem className='pt-2'>
              <NavLink tag={ReactLink} to="/contact">Contact Us</NavLink>
            </NavItem>
            <NavItem className='pt-2'>
              <NavLink tag={ReactLink} to="/video">Videos</NavLink>
            </NavItem>
            
          </Nav>
          <Nav navbar>
            {/* {
              login &&(
                <NavItem className='pt-2'>
              <NavLink >
                Logout
              </NavLink>
            </NavItem>
              )
            } */}
          <NavItem className='pt-2'>
              <NavLink tag={ReactLink} to="/login1">
                Login
              </NavLink>
            </NavItem>
            <NavItem className='pt-2'>
              <NavLink tag={ReactLink} to="/register">
                SignUp
              </NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
    )
}

export default CustomNavbar;