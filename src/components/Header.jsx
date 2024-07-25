import React, { useState } from 'react'
import { useSelector } from 'react-redux';


const Header = () => {
  const navArray = useSelector((state) => state.navArray);
  const [show, setShow] = useState(false);

  return (
    <header id="header" role="banner">
      <div className="header__inner">
        <div className="header__logo">
          <h1><a href="/">portfolio<em>react</em></a></h1>
        </div>
        <nav className={"header__nav" + (show ? " show" : "")} role="navigation" aria-label="main-menu">
          <ul>
            {
              navArray.map((item, key) => {
                return <li key={key}><a href={item.link}>{item.title}</a></li>
              })
            }
          </ul>
        </nav>
        <div
          className="header__nav__mobile"
          id="headerToggle"
          role="button"
          aria-controls="primary-menu"
          aria-expanded={show.toString()}
          aria-label="primary-menu"
          tabIndex="0"
          onClick={() => {setShow(!show);}}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
