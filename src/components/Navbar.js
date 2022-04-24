import React, {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {useScroll} from "../hooks/useScroll";
import { ReactComponent as SearchLogo } from '../static/images/icon-find.svg'
import Logo from '../static/images/Hagom-Logo.png'
import { ReactComponent as Bell } from '../static/images/icon-bell.svg'
import { ReactComponent as DropdownArrow } from '../static/images/icon-dropDown.svg'
import DropdownContent from "./DropdownContent";

const Navbar = () => {
    const searchInput = React.useRef(null)
    const [userInput, setUserInput] = useState('')
    const [scrollDimensions] = useScroll()
    const { scrollY } = scrollDimensions
    const navigate = useNavigate();

    const onChange = async (event) => {
        setUserInput(event.target.value)
    }

    useEffect(() => {
        if (
            document.activeElement === searchInput.current &&
            userInput.length === 0
        ) {
            navigate('/browse')
        }
        if (userInput.length > 0) navigate(`/search?q=${userInput}`)
    }, [navigate, userInput, searchInput])

    const onLogoClick = () => {
        setUserInput('')
    }

    return (
        <nav className={'navigation ' + (scrollY > 50 ? 'black' : '')}>
            <ul className='navigation__container'>
                <NavLink to='/' onClick={() => onLogoClick()}>
                    <img
                        className='navigation__container--logo'
                        src={Logo}
                        alt=''
                    />
                </NavLink>
                <DropdownArrow className='navigation__container--downArrow-2'/>
                <div className='navigation__container-link pseudo-link'>Home</div>
                <div className='navigation__container-link pseudo-link'>Soap opera</div>
                <div className='navigation__container-link pseudo-link'>Movies</div>
                <div className='navigation__container-link pseudo-link'>To be released</div>
                <div className='navigation__container-link pseudo-link'>My List</div>

                <div className='navigation__container--left'>
                    <SearchLogo className='logo' />
                    <input
                        ref={searchInput}
                        value={userInput}
                        onChange={(event) => onChange(event)}
                        className='navigation__container--left__input'
                        type='text'
                        placeholder='Title, genres, people'
                    />
                </div>

                <div className='navigation__container-link pseudo-link'>QnA</div>
                <div className='navigation__container-link pseudo-link'>Community</div>
                <Bell className='navigation__container--bellLogo' />

                <DropdownContent />
                <DropdownArrow className='navigation__container--downArrow' />
            </ul>
        </nav>
    );
};

export default Navbar;