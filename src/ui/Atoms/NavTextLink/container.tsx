import React from 'react';
import { NavLink } from 'react-router-dom';
import { INavLink } from './interface';

const NavLinkContainer: React.FC<INavLink> = ({ text, to, exact }) => <NavLink to={to} exact={exact}>{text}</NavLink>

export default NavLinkContainer;