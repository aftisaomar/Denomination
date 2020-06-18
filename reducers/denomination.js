import { SET_AMOUNT,DENOMINATION, RESET } from '../constants/actions';




const getResult = (amount) => {

    const denominations = [100, 50, 20, 10, 5, 1]
    const result = []

    while(amount > 0){

      const denomination =  denominations.find((element)=> (amount-element)>=0)

      if(denomination){

        amount = amount - denomination;

        const element = result.find((element) => element.deno === denomination )
        
        if(element){
            element.count++;
        }else{

            result.push({
                deno: denomination,
                count : 1
            })
        }

      }

    }

    return result;



}


const initialState ={
    denominations : [100, 50, 20, 10, 5, 1],
    amount : '',
    result : []
}

export default (state= initialState, action ={}) => {

    switch(action.type){

        case SET_AMOUNT:

            return { ...state, amount : action.payload }


        case DENOMINATION: 
                
            return {
                ...state,
                result : getResult(state.amount)
            }

        case RESET: 
        
            return {
                ...state,
                result : [],
                amount : ''

            }

        default :
            return { ...state }
    }
}