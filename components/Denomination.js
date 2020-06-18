import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useStore, useSelector } from 'react-redux';

import {setAmount,setDenomination, reset} from '../actions/actions-types'
import styles from '../styles';

const Denomination = props => {

    const dispatch = useDispatch();

    const { denomination, amount, result } = useSelector( state => state.denomination );

    console.log(result)

    console.log(amount)

    return (
        <View style = {styles.container}>

            <TextInput 
             keyboardType='number-pad'
             style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
             onChangeText={(value) =>dispatch(setAmount(value))}
             value={amount}   
            />

           <TouchableOpacity style = {styles.buttonContainer} 
            onPress = {()=>dispatch(setDenomination()) } >
           
              <Text>Dénomination</Text>
           
           </TouchableOpacity>


           <TouchableOpacity style = {styles.buttonContainer}
            onPress = {()=>dispatch(reset())}>
           
              <Text>Reset</Text>
           
           </TouchableOpacity>


            {result.map((element,index)=>(

            <Text key={index}>{element.deno} : {element.count}</Text>

            ))}

        </View>
    );
}
export default Denomination;