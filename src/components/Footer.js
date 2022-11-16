import "./Footer.scss";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {jwtUtils} from "../utils/jwtUtils";
import {useEffect, useState} from "react";
import {setToken} from "../redux/reducers/AuthReducer";

const Footer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.Auth.token);
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (jwtUtils.isAuth(token)) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [token]);
    const logout = async () => {
        await dispatch(setToken(""));
        alert("로그아웃 되었습니다");
        navigate("/");
    };
    return (
        <div className={"footerMain"}>
            <div className="footerWrapper">
                <div className="footerTitle">
                </div>
                <div className="footerMenu">
                    <Link to="/FoursquareGospel">피드</Link>
                    <Link to="/board-list?page=1">게시판</Link>
                    <Link to="/add-board">글쓰기</Link>
                    {isAuth ? (
                        <>
                            <Link to="/myboard-list?page=1">내 게시물</Link>
                            <Link to="#" onClick={logout}>로그아웃</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login">로그인</Link>
                            <Link to="/signUp">회원가입</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Footer;