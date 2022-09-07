import React from "react"
// import SideMenu  from "./components/sidemenu"
// import Layout from "./screens/panel/layout"
import '../src/assets/styles/layout.css'
import AppRouter from "./AppRouter"
import SideMenu from "./components/SideMenu"
const App=()=>{

    return(
        <div className="app">
            <AppRouter />
      
        </div>
    )
}

export default App;