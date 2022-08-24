import React from "react"
import SideMenu  from "./components/sidemenu"
import Layout from "../src/screens/layout"
import '../src/assets/styles/layout.css'
const App=()=>{

    return(
        <div className="app">
            <SideMenu/>
            <Layout/>
        </div>
    )
}

export default App;