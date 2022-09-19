// Product actions here
import React from "react";
import axios from "axios";
import {
    GET_PRODUCTS_LOADING,
GET_PRODUCTS_SUCCESS,
GET_PRODUCTS_ERROR,
} from "./product.types"

export const getProducts = () => (dispatch) => {
    dispatch({type:GET_PRODUCTS_LOADING});
    axios.get("http://localhost:8080/products")
    .then((res)=>{
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data});
    })
    .catch(()=>dispatch({ytpe:GET_PRODUCTS_ERROR}));
}