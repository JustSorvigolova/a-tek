import React from 'react';
import './Card.css'
import shop_card from './../../../img/cart_black.png'
import {NavLink} from "react-router-dom";


const Card = (props) => {

    return (

        <div className="col  g-3 ">

                <div className="card sizer">
          <NavLink to={'product/'+props.id}><img src={props.image} className="card-img-top" alt="..." /></NavLink>
            <div className="card-body row-cols-12">
                        <p className= "card-text">{props.name}</p>
                        <h6 className="card-title">{props.price} com/шт</h6>
                        <p className="card-subtitle ">{props.description}  </p>

                        <button className=" btn-outline-primary huv"><a href="#"><img src={shop_card} />В корзину</a></button>

                    </div>

                </div>

            </div>
     )

        }

export default Card;