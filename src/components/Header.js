import React from "react";
import AddGroup from './AddGroup';

const Header = () => {
    return(
        <div className="menu">
            <div className= "container">
                <h2>Groupify</h2>
            </div>
            <AddGroup />
        </div>
    );
}

export default Header;