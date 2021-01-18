import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DropdownCadastro } from './DropdownCadastro'
import { DropdownAcesso } from './DropdownAcesso'

import './Navbar.css'

export function Navbar() {
    const [click, setClick] = useState(false)

     const [dropdownCadastro, setDropdownCadastro] = useState(false)
     const [dropdownAcesso, setDropdownAcesso] = useState(false)

    const handleClick = () => {
        setClick(!click);
    }
    
    const closeMobileMenu = () => {
        setClick(false);
    }

    const onMouseEnterAcesso = () => {
        if(window.innerWidth < 960) {
            setDropdownAcesso(false)
        } else {
            setDropdownAcesso(true)
        }
    }
    
    const onMouseLeaveAcesso = () => {
        if(window.innerWidth < 960) {
            setDropdownAcesso(false)
        } else {
            setDropdownAcesso(false)
        }
    }


    const onMouseEnterCadastro = () => {
        if(window.innerWidth < 960) {
            setDropdownCadastro(false)
        } else {
            setDropdownCadastro(true)
        }
    }
    
    const onMouseLeaveCadastro = () => {
        if(window.innerWidth < 960) {
            setDropdownCadastro(false)
        } else {
            setDropdownCadastro(false)
        }
    }

    return (
        <>
            <nav className="navbar">
                <Link to='/' className="navbar-logo">
                    EPIC
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/buscar" className="nav-links" onClick={closeMobileMenu}>
                            Buscar
                        </Link>
                    </li>

                    <li className="nav-item"
                        onMouseEnter={onMouseEnterCadastro}
                        onMouseLeave={onMouseLeaveCadastro}
                    >
                        <Link to="/cadUser" className="nav-links" onClick={closeMobileMenu}>
                            Cadastrar <i className="fas fa-caret-down" />
                        </Link>
                        {dropdownCadastro && <DropdownCadastro />}
                    </li>

                    <li className="nav-item"
                        onMouseEnter={onMouseEnterAcesso}
                        onMouseLeave={onMouseLeaveAcesso}
                    >
                        <Link to="/cadUser" className="nav-links" onClick={closeMobileMenu}>
                            Acessar <i className="fas fa-caret-down" />
                        </Link>
                        {dropdownAcesso && <DropdownAcesso />}
                    </li>


                </ul>
            </nav>
        </>
    )
}


