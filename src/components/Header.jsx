import React from 'react'
import './styles/Header.scss'
import Nav from './Nav'
import Util from './Util'
const Header = () => {
  return (
    <header>
        <div className="inner">
            <Nav/>
            <h1 className="logo">
                <a href="#">
                    <img src="/img/logo.svg" alt="logo" />
                </a>
            </h1>
            <Util/>
        </div>
    </header>
  )
}

export default Header