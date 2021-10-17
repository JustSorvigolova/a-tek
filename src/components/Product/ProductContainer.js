import React from 'react';
import Product from "./Product";
import {compose} from "redux";
import {getOneProduct} from "../../Reducers/productReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import axios from "axios";


class ProductContainer extends React.Component{

        componentDidMount() {
           let id = this.props.match.params.id;
           this.props.getOneProduct(id)
        }

    render() {
        return (
            <Product product={this.props.productss} />
        );
    }
}
const mapStateToProps =(state)=>{
    return {
        productss: state.products_01.product
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getOneProduct}),
)(ProductContainer)
