import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import SignUp from "./pages/signin/SignUp";
import Login from "./pages/login/Login";
import PrivateRoute from "./routes/PrivateRoute";
import AddBoard from "./pages/add-board/AddBoard";
import BoardList from "./pages/board-list/BoardList";
import MyBoardList from "./pages/myboard-list/MyBoardList";
import Board from "./pages/board/Board";
import EditBoard from "./pages/edit-board/EditBoard";
import FirebaseSignUp from "./components/firebase/FirebaseSignUp";
import FirstPage from "./pages/custompage/FirstPage"
import SecondPage from "./pages/custompage/SecondPage";
import ThirdPage from "./pages/custompage/ThirdPage";
import FourthPage from "./pages/custompage/FourthPage";
// import NavTest from "./pages/navgospel/NavTest";

const App = () => {
    const location = useLocation();

    return (
        <div>
            <div className="background">
                <React.Fragment>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        {/* <Route path="/NavTest1" element={<NavTest />} /> */}
                        <Route path="/sign-up" element={<SignUp />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/firebaseSignUp" element={<FirebaseSignUp />}/>
                        <Route path={"/first-page"} element={<FirstPage />}></Route>
                        <Route path={"/second-page"} element={<SecondPage />}></Route>
                        <Route path={"/third-page"} element={<ThirdPage />}></Route>
                        <Route path={"/fourth-page"} element={<FourthPage />}></Route>
                        <Route
                            path="/add-board"
                            element={
                                <PrivateRoute path="/add-board" component={AddBoard}/>
                            }
                        />
                        <Route path="/board-list" element={<BoardList/>}/>
                        <Route
                            path="/myboard-list"
                            element={
                                // 쿼리 파라미터가 존재하므로 전체 url을 PrivateRoute에 넘겨준다
                                <PrivateRoute path={`${location.pathname}`} component={MyBoardList}/>
                            }
                        />
                        <Route path="/board/:board_id" element={<Board/>}/>
                        <Route
                            path="/edit-board/:board_id"
                            element={
                                // URI 파라미터가 존재하므로 전체 url을 PrivateRoute에 넘겨준다
                                <PrivateRoute path={`${location.pathname}`} component={EditBoard}/>
                            }
                        />
                    </Routes>
                </React.Fragment>
            </div>
        </div>
    )
}
export default App;