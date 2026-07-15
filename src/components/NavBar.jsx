import React from 'react'
import { NavLinks } from '../constants'

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src='/public/logo.svg' alt='logo-image' />

            <ul>
                {NavLinks.map(({label}) => (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex-center gap-3'>
                <button>
                    <img src='/public/search.svg' />
                </button>
                <button>
                    <img  src='cart.svg' />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar