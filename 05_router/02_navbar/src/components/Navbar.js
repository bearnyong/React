
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [number, setNumber] = useState(0);
    const activeStyle = {
        backgroundColor : 'lightgreen',
        fontColor : 'green',
        textDecorationLine: 'none'
    }
    const onClick = () => {
        setNumber(number + 1);
    }
    return (
        <>
            {
                // <div>
                //     <ul>
                //         <li><a href={"/"}>Home</a></li>
                //         <li><a href={"/mypage"}>마이페이지</a></li>
                //         <li><a href={"/login"}>로그인</a></li>
                //     </ul>
                // </div>
                // <div>
                //     <ul>
                //         <li><Link to="/">home</Link></li>
                //         <li><Link to="/mypage">mypage</Link></li>
                //         <li><Link to="/login">login</Link></li>
                //     </ul>
                // </div>
            }
            <div>
                <ul>
                    <li><NavLink to="/" style={({isActive})=> isActive? activeStyle:undefined}>home</NavLink></li>
                    <li><NavLink to="/mypage" style={({isActive})=> isActive? activeStyle:undefined}>mypage</NavLink></li>
                    <li><NavLink to="/login" style={({isActive})=> isActive? activeStyle:undefined}>login</NavLink></li>
                </ul>
            </div>
            <p>{number}</p>
            <button onClick={onClick}>state 테스트</button>
        </>
    )
}

export default Navbar;