import React from 'react';
import { HorizontalMenu } from '../../Malecules';
import { INavbar } from './interfaces';

const NavbarContainer: React.FC<INavbar> = ({ routes }) => {
  return (
    <nav>
      <div className="nav-wrapper deep-purple darken-1 px1">
        <a href="/" className="brand-logo">Typescript</a>
        <HorizontalMenu items={routes} />
      </div>
    </nav>
  )
}

export default NavbarContainer;