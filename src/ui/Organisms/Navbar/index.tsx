import React from 'react';
import NavbarContainer from "./container";
import { INavbar } from './interfaces';

const Navbar: React.FC<INavbar> = ({ routes, ...props }) => <NavbarContainer routes={routes} {...props} />

export default Navbar;