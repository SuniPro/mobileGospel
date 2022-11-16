import React from 'react';
import './thridPage.scss';
import mainLogo from './nullImage.png';

const ThirdPage = () =>{

    return (
        <div className={"custom-wrapper"}>
            <div className={"title"}>
                <div className={"mainImage"}>
                    <img src={mainLogo} />
                </div>
                <div className={"Logo"}>
                    <img src={mainLogo}/>
                </div>
                <div>중부지방회</div>
            </div>
            <div className={"custom-content"}>
                <div className={"content"}>지방회객체</div>
                <div className={"content"}>지방회객체</div>
                <div className={"content"}>지방회객체</div>
                <div className={"content"}>지방회객체</div>
                <div className={"content"}>지방회객체</div>
                <div className={"content"}>지방회객체</div>
            </div>
        </div>
    )
}


export default ThirdPage;