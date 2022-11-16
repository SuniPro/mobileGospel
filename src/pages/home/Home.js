import "./home.scss";
import React from 'react';
import Login from "../login/Login";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import SignUp from "../signin/SignUp";
import {Button} from "@mui/material";

const Home = () => {
    return (
        <div>
            <div className="home-wrapper">
                <div className="home-title"> {/*이후 로고 반영 예정*/}
                    D-Board
                </div>
                    <Button className={"button-login"}><Link to="/login" element={<Login />}>로그인</Link></Button>
                    <Button className={"button-signUp"}><Link to="/sign-up" element={<SignUp></SignUp>}>회원가입</Link></Button>
            </div>
        </div>
    )
}

export default Home;

