import React, {Component} from 'react';

import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getOneProduct, updateproduct} from "../../Reducers/productReducer";
import Edit from "./Edit";

class EditContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let id  = this.props.match.params.id;
        this.props.getOneProduct(id)
    }

    render() {
        return (
            <Edit product={this.props.product} updateproduct={this.props.updateproduct}/>
        );
    }
}
const mapStateToProps =(state)=>{
    return {
        product: state.products_01.product
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {updateproduct,getOneProduct})
)(EditContainer)

