import React from "react";
import "../assets/styles/screen5.css"

const Screen5 =()=>{
    return(
        <div >
           <div className="base4">            
            <div className="numberBox4">1</div>
            <div  className="title">عنوان</div>
            <input className="textBar1" type={Text} size={60}></input>
           </div>
           <div className="base4_2">            
            <div  className="title">توضیحات</div>
            <input className="textBar2" type={Text} ></input>
           </div>
           <div className="base4">            
            <div className="title">آپلود فایل</div>
            <input  className="textBar3" type={"file"} ></input>
           </div>
           <div>
           <button className="btn">دکمه 2</button>
           <button id="btn2" className="btn">دکمه 1</button>
           </div>
           <hr/>
           <div className="footer">اضافه کردن تصویر به منو شماره 5</div>
        </div>
        
    )
}

export default Screen5;