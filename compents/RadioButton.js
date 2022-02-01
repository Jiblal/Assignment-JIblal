import { View, Text, StyleSheet, Pressable } from 'react-native';
import React,{useEffect, useState} from 'react';
import styles from '../styles/Style'

export default function Radiobutton({options, onPress, style }) {
    const[value, setValue]= useState(options[0].value);
    useEffect( ()=>{
        onPress(value)
    }, [] )
    function handlePress(selected){
        setValue(selected);
        onPress(selected);
       
    }
    return (
        <>
        {
          options.map((item)=>(
              <View key={item.value} style={[styles.buttonContainer]}>
                  <Text style={styles.label}>{item.label}</Text>
                  <Pressable style={[styles.circle]} onPress={()=> handlePress(item.value)}>
                    {value=== item.value && <View style={[styles.checkedCircle,style]}></View> }
                  </Pressable>
                
                </View>
            ))
        }
        </>
    );
}




