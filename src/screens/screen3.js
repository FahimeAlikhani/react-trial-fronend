import React from "react"
import "../assets/styles/screen3.css"
import img1_dots from "../assets/images/Group 82.svg"


const Screen3 =()=>{

    return(

        <div >
            <div className="base">
                <div className="numberBox">1</div>
                <img  className="imgCss" src={img1_dots}/>
            <div className="title">
                <div > عنوان</div>
                <input  className="textBar" type={Text} size={60} ></input>
              </div>
              <div className="title">
                <div >توضیحات</div>
                <input  className="textBar_2" type={Text} ></input>     
              </div>
              <div className="line"></div>
           </div>
           <div className="base">
                <div className="numberBox">2</div>
                <img  className="imgCss" src={img1_dots}/>
            <div className="title">
                <div > عنوان</div>
                <input  className="textBar" type={Text} size={60} ></input>
              </div>
              <div className="title">
                <div >توضیحات</div>
                <input  className="textBar_2" type={Text} ></input>
              </div>
              <div className="line"></div>
           </div>
           <div className="base">
                <div className="numberBox">3</div>
                <img  className="imgCss" src={img1_dots}/>
            <div className="title">
                <div > عنوان</div>
                <input  className="textBar" type={Text} size={60} ></input>
              </div>
              <div className="title">
                <div >توضیحات</div>
                <input  className="textBar_2" type={Text} ></input>
              </div>
           </div>
            
     </div>
        
    ) 
}

export default Screen3;