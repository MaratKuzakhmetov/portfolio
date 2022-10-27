import React from 'react';
import {
  AiTwotoneHome, AiOutlineUser, AiFillHeart, AiOutlineMessage,
} from 'react-icons/ai';
import { GiNetworkBars } from 'react-icons/gi';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <a href="!#">
        <AiTwotoneHome />
      </a>
      <a href="!#">
        <AiOutlineUser />
      </a>
      <a href="!#">
        <GiNetworkBars />
      </a>
      <a href="!#">
        <AiFillHeart />
      </a>
      <a href="!#">
        <AiOutlineMessage />
      </a>
    </nav>
  );
}

export default Nav;
