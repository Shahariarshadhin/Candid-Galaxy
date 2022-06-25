import React from 'react';
import { Link } from 'react-router-dom';
// import title_logo from '../../images/title-logo.png'

const Navbar = () => {

    const menubar = <>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/addYourClick">Add Your Click</Link></li>

        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About</Link></li>

    </>
    return (
        <div>
            <div class="navbar text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menubar}


                        </ul>

                    </div>

                    <p className='lg:mx-28 lg:text-2xl font-black'><span className='text-4xl text-[#FF0000]'>C</span>andid <span className='text-4xl text-[#FF0000]'>G</span>alaxy</p>

                </div>
                <div class="navbar-center hidden lg:flex text-white">
                    <ul class="menu menu-horizontal p-0">
                        {menubar}

                    </ul>
                    {/* <img className='h-16 w-36' src={title_logo} alt="" /> */}
                </div>

            </div>
        </div>
    );
};

export default Navbar;