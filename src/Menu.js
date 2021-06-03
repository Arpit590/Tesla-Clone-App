import React from 'react'
import "./Menu.css";
import MenuItem from './MenuItem';

function Menu() {
    return (
        <div className="menu">
            <MenuItem title="Existing Inventory"/>
            <MenuItem title="Trade-In"/>
            <MenuItem title="CyberTruck"/>
            <MenuItem title="Roadster"/>
            <MenuItem title="Semi"/>
            <MenuItem title="Charging"/>
            <MenuItem title="PowerWall"/>
            <MenuItem title="Commercial Solar"/>
            <MenuItem title="Test Drive"/>
            <MenuItem title="Contact Us"/>
            <MenuItem title="Support"/>
            <MenuItem title="India"/>

        </div>
    )
}

export default Menu
