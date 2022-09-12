import React,{lazy} from "react";
// const Screen1=lazy(()=>import ("./screens/screen1"))
// const Screen2=lazy(()=>import ("./screens/screen2"))
// const Screen3=lazy(()=>import ("./screens/screen3"))
// const Screen4=lazy(()=>import ("./screens/screen4"))
// const Screen5=lazy(()=>import ("./screens/screen5"))
// import Panel from "./screens/panel/Panel";
import Panel from "./screens/panel/Panel";
import Screen1 from "./screens/screen1"
import Screen2 from "./screens/screen2"
import Screen3 from "./screens/screen3"
import Screen4 from "./screens/screen4"
import Screen5 from "./screens/screen5"


const ProtectRoutes=[
    {
        key:1,
        path:"/Screen1",
        component:Screen1,
        exact:true,
    },
    {
        key:2,
        path:"/Screen2",
        component:Screen2,
        exact:true,
    },
    {
        key:3,
        path:"/Screen3",
        component:Screen3,
        exact:true,
    },
    {
        key:4,
        path:"/Screen4",
        component:Screen4,
        exact:true,
    },
    {
        key:5,
        path:"/Screen5",
        component:Screen5,
        exact:true,
    }
   
]
export default ProtectRoutes;