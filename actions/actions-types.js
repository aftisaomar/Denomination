import { SET_AMOUNT,DENOMINATION, RESET } from '../constants/actions';


export const  setAmount = (payload) => {

    return {
        type : SET_AMOUNT,
        payload   
    }


}

export const setDenomination = () => {


    return {

        type: DENOMINATION
    }

}


export const reset = () => {


    return {

        type : RESET

    }

}

