import React from "react"
import "../assets/styles/screen3.css"
import img1 from "../assets/images/Group 79.svg"
import img1_dots from "../assets/images/Group 82.svg"
import img2 from "../assets/images/Group 80.svg"
import img3 from "../assets/images/Group 81.svg"

const Screen3 =()=>{

    return(
        <div>
            <div className="base">
            <img className="imgCss" src={img1} />
            <img id="dots1" className="imgCss" src={img1_dots}/>
            <div className="title">
                <div > عنوان</div>
                <br /> <br /> <br />
                <div >توضیحات</div>

            </div>
            <div>
                <input id="txt1" className="textBar" type={Text} size={60} ></input>
                <input id="txt2" className="textBar" type={Text}></input>
            </div>
            </div>
            <hr />
            <div className="base">
            <img className="imgCss" src={img2} />
            <img id="dots2" className="imgCss" src={img1_dots}/>
            <div className="title">
                <div > عنوان</div>
                <br /> <br /> <br />
                <div >توضیحات</div>

            </div>
            <div>
                <input id="txt1" className="textBar" type={Text} size={60} ></input>
                <input id="txt2" className="textBar" type={Text}></input>
            </div>
            </div>
            <hr />
            <div className="base">
            <img className="imgCss" src={img3} />
            <img id="dots3" className="imgCss" src={img1_dots}/>
            <div className="title">
                <div > عنوان</div>
                <br /> <br /> <br />
                <div >توضیحات</div>

            </div>
            <div>
                <input id="txt1" className="textBar" type={Text} size={60} ></input>
                <input id="txt2" className="textBar" type={Text}></input>
            </div>
            </div>
        </div>
        
    ) 
}

export default Screen3;







