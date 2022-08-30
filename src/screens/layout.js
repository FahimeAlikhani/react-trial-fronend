import React from "react";
import '../../src/assets/styles/layout.css';
import MenuBar  from "../components/menuBar";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Screen4 from "./screen4";

const App=()=>{

    return(
        <div className="page">
            <MenuBar/>
            <Screen3/>
        </div>
    )
}

export default App;