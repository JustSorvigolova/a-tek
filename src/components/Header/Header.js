import React from 'react';
import gamp from '../../img/gamb.png'
import logo from '../../img/Снимок экрана от 2021-07-07 17-20-18.png'
import './Header.css'
import shop from './../../img/outline_shopping_cart_black_24dp.png'
import heart from './../../img/outline_favorite_border_black_24dp.png'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className="container lpl ">
            <div className="row align-items-center">
                <div className="col-1">
            <img  src={gamp} height="20px" />
            </div>
                <div className="col-1">
                <NavLink to={'/'}>  <img  src={logo} height="40px" /></NavLink>
            </div>
                <div className="col-lg-6">
                    <form>
                        <input className="forms"/>
                    </form>
                </div>
                <div className="col-1">

                    <img src={shop} className="pad" /> <br/>
                    <div className="location"> Добавить Товар</div>
                </div>

                <div className="col-1">
                    <img src={heart} className="pad" /> <br/>
                    <div className="location">Избранное</div>
                </div>
                    <div className="col-1">
<button className='hoc'>Регистрация</button>
                    </div>
            </div>
        </div>
    );
};

export default Header;