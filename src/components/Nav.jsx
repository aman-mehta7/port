import React from 'react'
import Button from './Button'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className="navbar bg-black">
      <div className="inner">
        <a className="logo" href="#hero">
          Aman
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group cursor-pointer">
                <a href={link}></a>
                <span>{name}</span>
                <span className="underline"></span>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span className="">Contact</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Nav