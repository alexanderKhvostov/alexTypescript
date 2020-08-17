import React from 'react';
import NavTextLink from '../../Atoms/NavTextLink';
import { IMenu, IItem } from './interface';

const HorizontalMenuContainer: React.FC<IMenu> = ({ items }) => {
    return (
        <ul className="right hide-on-med-and-down">
            {items.map((item: IItem, index: number) => (
                <li><NavTextLink key={index} to={item.to} exact={item.exact} text={item.text} /></li>
            ))}
        </ul>
    )
}

export default HorizontalMenuContainer;