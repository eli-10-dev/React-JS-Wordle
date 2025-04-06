import React from "react";
import "./Keyboard.css";

function Keyboard(){

    return(
        <div className="keyboard">
            <div className="keypad flex">
                <div className="key flex" value="Q">Q</div>
                <div className="key flex" value="W">W</div>
                <div className="key flex" value="E">E</div>
                <div className="key flex" value="R">R</div>
                <div className="key flex" value="T">T</div>           
                <div className="key flex" value="Y">Y</div>
                <div className="key flex" value="U">U</div>
                <div className="key flex" value="I">I</div>
                <div className="key flex" value="O">O</div>
                <div className="key flex" value="P">P</div>
                <div className="space"></div>
                <div className="key flex" value="A">A</div>
                <div className="key flex" value="S">S</div>
                <div className="key flex" value="D">D</div>
                <div className="key flex" value="F">F</div>
                <div className="key flex" value="G">G</div>           
                <div className="key flex" value="H">H</div>
                <div className="key flex" value="J">J</div>
                <div className="key flex" value="K">K</div>
                <div className="key flex" value="L">L</div>
                <div className="space"></div>
                <div className="key flex" value="Z">Z</div>  
                <div className="key flex" value="X">X</div>           
                <div className="key flex" value="C">C</div>
                <div className="key flex" value="V">V</div>
                <div className="key flex" value="B">B</div>
                <div className="key flex" value="N">N</div>
                <div className="key flex" value="M">M</div>     
            </div>
        </div>
    );
}

export default Keyboard;