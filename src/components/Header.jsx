import React, { useState } from 'react'

const headerNav = [
  {
    id: 1,
    title: 'intro',
    link: '#intro',
  },
  {
    id: 2,
    title: 'skill',
    link: '#skill',
  },
  {
    id: 3,
    title: 'site',
    link: '#site',
  },
  {
    id: 4,
    title: 'portfolio',
    link: '#port',
  },
  {
    id: 5,
    title: 'contact',
    link: '#contact',
  },
]

const Header = () => {
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
              headerNav.map((item) => {
                return <li key={item.id}><a href={item.link}>{item.title}</a></li>
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
