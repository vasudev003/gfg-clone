import home from '../gfg-gg-logo.svg';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import React from 'react';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header >
        <div className = "nav-area" >
        <Navbar />
        <a href = "/#" className = "logo" >
        <img height="50" src={home} alt="" /> </a> 
        </div> 
        <SearchIcon className='searchIcon' />
        <div className='user'>
        <Link to="/signup">
        <Button variant="contained" 
        // color='Black'
         className='Sign_up_btn'>Sign In</Button>
        </Link>
      </div>
        </header >
        
  )
}

export default Header