import React from 'react';
import mainLogo from './nullImage.png';
import './secondPage.scss';


const SecondPage = () => {

    return (
        <div className={"custom-wrapper"}>
            <div className={"title"}>
                <div className={"mainImage"}>
                    <img src={mainLogo} />
                </div>
                <div className={"Logo"}>
                    <img src={mainLogo}/>
                </div>
                <div>총회조직리더</div>
            </div>
            <div className={"custom-content"}>
                <div className={"content"}>
                    <div>총회장</div>
                    <div><img src={mainLogo} /></div>
                    <div>임춘수 목사</div>
                    <div>
                        한세대학교목회학과
                        건신대학교 M.Div
                        건신대학교 박사과정 수료
                        현 참빛교회 담임
                    </div>
                </div>
                <div className={"content"}>
                    <div>국제총회장</div>
                    <div><img src={mainLogo} /></div>
                    <div>안영권 목사</div>
                    <div>
                        한세대학교목회학과
                        건신대학교 M.Div
                        건신대학교 박사과정 수료
                        현 참빛교회 담임
                    </div>
                </div>
                <div className={"content"}>
                    <div>부총회장</div>
                    <div><img src={mainLogo} /></div>
                    <div>임춘수 목사</div>
                    <div>
                        한세대학교목회학과
                        건신대학교 M.Div
                        건신대학교 박사과정 수료
                        현 참빛교회 담임
                    </div>
                </div>
                <div className={"content"}>
                    <div>부총회장</div>
                    <div><img src={mainLogo} /></div>
                    <div>임춘수 목사</div>
                    <div>
                        한세대학교목회학과
                        건신대학교 M.Div
                        건신대학교 박사과정 수료
                        현 참빛교회 담임
                    </div>
                </div>
                <div className={"content"}>
                    <div>총무</div>
                    <div><img src={mainLogo} /></div>
                    <div>임춘수 목사</div>
                    <div>
                        한세대학교목회학과
                        건신대학교 M.Div
                        건신대학교 박사과정 수료
                        현 참빛교회 담임
                    </div>
                </div>
                <div className={"content"}>
                    <div>회계</div>
                    <div><img src={mainLogo} /></div>
                    <div>임춘수 목사</div>
                    <div>
                        한세대학교목회학과
                        건신대학교 M.Div
                        건신대학교 박사과정 수료
                        현 참빛교회 담임
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage;