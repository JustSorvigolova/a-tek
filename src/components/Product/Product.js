import React from 'react';
import './Product.css'
import edit from './../../img/edit.png'
import heart from './../../img/outline_favorite_border_black_24dp.png'
import cart from './../../img/cart_black.png'
import {NavLink} from "react-router-dom";

const Product = (props) => {
        if (!props.product){
            return <div>Not Found!</div>
        }
    return (

 <div className={"container plp"}>
 <div className='row'>
   <div className='col-12 pt-5 pb-5'>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
           <li className="breadcrumb-item "><NavLink className={'Color_item'} to='/'>Home</NavLink></li>
         <li className="breadcrumb-item "><NavLink className={'Color_item'} to={`${props.product.id}`}>{props.product.id}</NavLink></li>
          <li className="breadcrumb-item "><NavLink className={'Color_item'} to={`${props.product.name}`}>{props.product.name}</NavLink></li>
              </ol>
      </nav>
   </div>
   </div>

            <div className='row'>
                <div className="col-md-6 ">
                    <img className='img-fluid ImgSize' src={props.product.image}/>
                </div>

                <div className="col-md-4 ">
                    <h1 className='pb-5' >{props.product.name}</h1>
                    <h4 className='pb-3'>{props.product.description}</h4>
                    <h2 className='pb-5 ' >Цена {props.product.price}</h2>
                    <h3>Количество : {props.product.amount} штук</h3>
                    <div className='row pt-5 mt-5'>
                        <div className='col-md-6'>
                            <button type="button" className="btn btn-outline-secondary">
                                <img src={heart}/>
                                В Избранное</button>
                        </div>
                        <div className='col-md-6'>
                            <button type="button " className="btn btn-outline-primary ">
                                <img src={cart}/>
                                В Корзину</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-2">
                    <NavLink to={'/edit/' + props.product.id}>
                    <button type="button" className="btn btn-outline-secondary">
                        <img src={edit}/> Изменить</button> </NavLink>
                </div>

             </div>

        </div>
    );
};

export default Product;