import React from 'react';
import './customHeader.scss';
import {Link} from "react-router-dom";

const CustomHeader = () => {

    return (
        <div className={"headerMain"}>
            <div className="headerWrapper">
                <div className="headerTitle">
                </div>
                <div className="headerMenu">
                    <Link to="/FoursquareGospel">피드</Link>
                    <Link to="/board-list?page=1">게시판</Link>
                    <Link to="/add-board">글쓰기</Link>
                </div>
            </div>
        </div>
    )
}

export default CustomHeader;
