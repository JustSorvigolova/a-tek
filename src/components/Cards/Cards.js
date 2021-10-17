import React from 'react';
import Card from "./Card/Card";
import {connect} from "react-redux";
import {getAllProduct} from "../../Reducers/productReducer";
import {withRouter} from "react-router";
import {compose} from "redux";


class Cards extends React.Component {

    componentDidMount() {
        this.props.getAllProduct()
    }

    render() {
     let pop = this.props.productsss.map(u=> <Card key={u.id} id={u.id}  name={u.name} description={u.description} price={u.price} image={u.image} />)

        return (
            <div className="row">

                {pop}
         </div>
        );
    }
}
const mapStateToProps =(state)=>{
   return {
       productsss: state.products_01.products
   }
}

export default compose(
    connect(mapStateToProps,{getAllProduct}),
    withRouter,
)(Cards);