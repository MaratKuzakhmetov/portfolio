import React, { useState } from 'react';
import {
  AiTwotoneHome, AiOutlineUser, AiOutlineHeart, AiOutlineMessage,
} from 'react-icons/ai';
import { GiNetworkBars } from 'react-icons/gi';
import './Nav.scss';

function Nav() {
  const [style, setStyle] = useState('about');
  return (
    <nav className="nav">
      <a href="!#" onClick={(e) => setStyle('about')} className={style === 'about' ? 'active' : 'nav__anchor'}>
        <AiTwotoneHome />
      </a>
      <a href="!#" onClick={(e) => setStyle('experience')} className={style === 'experience' ? 'active' : 'nav__anchor'}>
        <AiOutlineUser />
      </a>
      <a href="!#" onClick={(e) => setStyle('services')} className={style === 'services' ? 'active' : 'nav__anchor'}>
        <GiNetworkBars />
      </a>
      <a href="!#" onClick={(e) => setStyle('portfolio')} className={style === 'portfolio' ? 'active' : 'nav__anchor'}>
        <AiOutlineHeart />
      </a>
      <a href="!#" onClick={(e) => setStyle('contact')} className={style === 'contact' ? 'active' : 'nav__anchor'}>
        <AiOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;
