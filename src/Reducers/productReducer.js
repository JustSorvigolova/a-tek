import {productAPI} from "../api/api";

const SET_ALL_PRODUCTS = 'PRODUCT/GET_ALL_PRODUCTS'
const  SET_ONE_PRODUCT = 'PRODUCT/GET_ONE_PRODUCT'
const EDIT_ONE_PRODUCT = 'PRODUCT/EDIT_ONE_PRODUCT'


const initState = {
    products: [],
    product: '',
}

const productReducer = ( state = initState, action )=>{
    switch (action.type) {
        case SET_ALL_PRODUCTS:
        return {
            ...state, products: action.payload
        }
        case SET_ONE_PRODUCT:
            return {
                ...state, product: action.payload
            }
        default :
            return state;

    }

}
export const setProductsAction = (payload)=>({ type: SET_ALL_PRODUCTS, payload })
export const setOneProductsAction = (payload)=>({ type: SET_ONE_PRODUCT, payload })
const setUpdateForProductAction = ( name,description,price,amount,image) =>(
    {type: SET_ONE_PRODUCT,payload:name,description,price,amount,image})




export const getOneProduct =(id)=> async (dispatch)=>{
    let response= await productAPI.getOneProduct(id)
    dispatch(setOneProductsAction(response.data))
}
export const getAllProduct =()=> async (dispatch)=>{
    let response= await productAPI.getAllProducts()
    dispatch(setProductsAction(response.data))
}
export const updateproduct = (id, name, description,price,amount,image)=> async (dispatch)=>{
    await productAPI.updateProduct(id, name, description,price,amount,image)
    let response = await productAPI.getOneProduct(id)
    dispatch(setOneProductsAction(response.data))
}


export default productReducer;