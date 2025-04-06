import React from "react";
import './Body.css';
import { useState, useEffect, useRef } from "react";
import Keyboard from "./Keyboard";

function Body() {

const clue = "Scooby doo hears dvd";
const word = "Test".split('');
const attempts = 3;
let tiles = word.map((el, index) => <div key={index} className="tile flex">{index}</div>);

const [array, setArray] = useState([]);


    return (
        <div className="body">
            
            <div className="clue flex">
                {clue}
            </div>  
            
            <div className="input-boxes flex">
                <div className="tile-container flex">
                    {tiles}
                </div>

                {/* <div className="tile-container flex">
                    {tiles}
                </div>
                
                <div className="tile-container flex">
                    {tiles}
                </div> */}
            </div>
        </div>
    );
}

export default Body;