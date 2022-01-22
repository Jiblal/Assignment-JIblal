import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioForm, {RadioButton, RadioButtonInput, } from 'react-native-simple-radio-button';
import { Button } from 'react-native-web';


export default function App() {
  const [weight, setWeight]= useState("");
  const[bottle, setbottle]=useState(1);
  const[time, SetTime]= useState(1);
  const [gender,setGender]= useState("male")
  const[density, setDensty]= useState(0);


  const allBottle=[
    {label:'1 Bottle', value:1},
    {label:'2 Bottles', value:2},
    {label:'3 Bottles', value:3},
    {label:'4 Bottles', value:4},
    {label:'5 Bottles', value:5},
  ];
  const selectTime=[
    {label:'1 Hour', value:1},
    {label:'2 Hours', value:2},
    {label:'3 Hours', value:3},
    {label:'4 Hours', value:4},
    {label:'5 Hours', value:5},
  ];
  const genders = [
    {label:'Male', value:'male'},
    {label:'Female', value:'female'}
  ]

  return (
    <View style={styles.container}>
      
      <Text style={[styles.header,
      {marginLeft:100}]}>Alcometer</Text>
      
      <Text style={styles.boldText}>Weight</Text>
      <TextInput value={weight}
       onChangeText={(text)=> setWeight(text)}
       placeholder='Enter Weight' 
       keyboardType='decimal-pad'/>
      <Text style={styles.boldText}>Bootles</Text>
      <Picker
        selectedValue={bottle}
        onValueChange={(itemvalue)=> setbottle(itemvalue)}
        >
        {allBottle.map((bottle)=>(
          <Picker.Item label={bottle.label} value={bottle.value}  ></Picker.Item>
        )          
        )}
      </Picker>
      <Text style={styles.boldText}>Time</Text>
      <Picker
        selectedValue={time}
        onValueChange={(itemvalue)=> SetTime(itemvalue)}
        >
        {selectTime.map((time)=>(
          <Picker.Item label={time.label} value={time.value}  ></Picker.Item>
        )          
        )}
      </Picker>
      <Text>Gender</Text>
      <RadioForm
          radio_props={genders}
          onPress={(value)=> (setGender(value))}
          
          />
      <Text>{density}</Text>
      <Button title='calculate'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
    marginLeft:5
  },
  body:{
    justifyContent: 'flex-start',
  },
  header:{
    fontSize:30,
    marginBottom:15,
    color: '#2196F3', // RGB of react native button-color for android
    fontWeight: 'bold',
  },
  boldText:{
    fontWeight: 'bold'
  }
});
