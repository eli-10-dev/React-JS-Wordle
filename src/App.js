import { useState, useEffect } from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Keyboard from "./Keyboard.js";

function App(){
    const clue = "Scooby doo hears dvd";
    const word = "Test".toUpperCase().split("");
    let tiles = word.map((el, index) => <div key={index} className="tile flex"></div>);

    // This array is for storing the user input (answer)
    const [array, setArray] = useState([]);

    const handleKeyDown = (e) => {
        const copyArray = [...array];
        copyArray[copyArray.length] = e.target.value;
        setArray(copyArray);
    }

    useEffect(() => {
        console.log(array);
    }, [array])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    return(
    <div>
        <Header />
        <Body 
        clue={clue}
        tiles={tiles}
        handleKeyDown={handleKeyDown}
        />
        <Keyboard />     
    </div>
    );
}

export default App;