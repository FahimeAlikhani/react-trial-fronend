import React from "react"
import '../../src/assets/styles/layout.css'
import Screen1 from "../screens/screen1"
import MenuBar  from "../components/menuBar";

const App=()=>{

    return(
        <div className="page">
            <MenuBar/>
            <Screen1/>
        </div>
    )
}

export default App;