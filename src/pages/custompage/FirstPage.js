import React from 'react';
import mainLogo from './nullImage.png';
import mainImage from './image/gospelsoulfontsample.jpg';
import logo1 from './image/homesamplegospel.jpg'
import logo2 from './image/homepicture.jpg'
import './firstPage.scss';


const FirstPage = () => {

    return(
        <div className={"custom-wrapper"}>
            {/*<div className={"title"}>*/}
                    <img className="mainImage" src={mainImage}/>
            {/*</div>*/}
            <div className={"custom-menu"}>
                <div className={"top-menu"}>
                <div className={"menu-1"}>총회안내</div><div className={"menu-2"}>우리가 믿는 것</div>
                </div>
                <div className={"bottom-menu"}>
                <div className={"menu-1"}>지방회</div><div className={"menu-2"}>자료실</div>
                </div>
            </div>
            <img className={"logo1"} src={logo1}/>
            
            <div className={"introduce"}>
                <div className={"introduce-church"}>교단소개</div>
                <div className={"introduce-church"}>총회장님 인사</div>
                <div className={"introduce-church"}>국제총회장님 인사</div>
            </div>
        </div>
    )
}

export default FirstPage;