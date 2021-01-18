import React, { useState } from 'react'
import { MenuItemsCadastro } from './MenuItemsCadastro'
import { Link } from 'react-router-dom'
import './Dropdown.css'

export function DropdownCadastro() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItemsCadastro.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link 
                            className={item.cName} 
                            to={item.path} onClick={() => {
                                setClick(false)
                                }}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
