import {
    PRODUCT_DETAILS_REQUEST,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
} from '../constants/productConstants';

export const productDetailsReducer = (state = {product : {} }, action ) => {
    switch(action.type) {

case PRODUCT_DETAILS_REQUEST:
    return {
        ...state,
        loading: true
    }
    case PRODUCT_DETAILS_SUCCESS:
    return {
        loading: false,
        product: action.payload
    }
    case PRODUCT_DETAILS_FAIL:
    return {
        ...state,
        error: null
    }

    case CLEAR_ERRORS:
        return {
            ...state,
            error: null
        }
    

        default: 
        return state
    }
}