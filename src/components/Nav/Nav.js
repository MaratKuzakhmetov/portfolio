import React, { useState } from 'react';
import {
  AiTwotoneHome, AiOutlineUser, AiOutlineHeart, AiOutlineMessage,
} from 'react-icons/ai';
import { GiNetworkBars } from 'react-icons/gi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import './Nav.scss';

function Nav() {
  const [style, setStyle] = useState('#');
  return (
    <nav className="nav">
      <a href="#header" onClick={(e) => setStyle('#')} className={style === '#' ? 'active' : 'nav__anchor'}>
        <AiTwotoneHome />
      </a>
      <a href="#about" onClick={(e) => setStyle('about')} className={style === 'about' ? 'active' : 'nav__anchor'}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={(e) => setStyle('experience')} className={style === 'experience' ? 'active' : 'nav__anchor'}>
        <GiNetworkBars />
      </a>
      <a href="#services" onClick={(e) => setStyle('services')} className={style === 'services' ? 'active' : 'nav__anchor'}>
        <AiOutlineHeart />
      </a>
      <a href="#portfolio" onClick={(e) => setStyle('portfolio')} className={style === 'portfolio' ? 'active' : 'nav__anchor'}>
        <MdOutlineWorkOutline />
      </a>
      <a href="#contact" onClick={(e) => setStyle('contact')} className={style === 'contact' ? 'active' : 'nav__anchor'}>
        <AiOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;
