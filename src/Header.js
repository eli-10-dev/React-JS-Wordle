import React from "react";
import "./Header.css";

function Header() {
const text = "JOSHDLE".split("");
const title = text.map((el) => <p className="letter">{el}</p>);


    return(
        <div className="header">
            {title}
        </div>
    );
}

export default Header;