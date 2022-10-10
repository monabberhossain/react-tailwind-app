import React from "react";

const NavItem = ({ route }) => {
    return (
        <div>
            <li className="mx-1 font-semibold">
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default NavItem;
