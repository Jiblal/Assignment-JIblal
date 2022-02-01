import { useState } from 'react';
import { Text,  TextInput, Button,ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles/Style';
import Radiobutton from './compents/RadioButton';


export default function App() {
  const [weight, setWeight]= useState("");
  const[bottle, setbottle]=useState(1);
  const[time, SetTime]= useState(1);
  const [gender,setGender]= useState("");
  const[alcoholLevel, setAlcoholLevel]= useState(null);
  const [color, setColor]= useState('black')

/* this is just a test  for github update*/ 
  const allBottle=[
    {label:'1 Bottle', value:1},
    {label:'2 Bottles', value:2},
    {label:'3 Bottles', value:3},
    {label:'4 Bottles', value:4},
    {label:'5 Bottles', value:5},
    {label:'6 Bottles', value:6},
    {label:'7 Bottles', value:7},
    {label:'8 Bottles', value:8},
    
    
  ];
  const selectTime=[
    {label:'1 Hour', value:1},
    {label:'2 Hours', value:2},
    {label:'3 Hours', value:3},
    {label:'4 Hours', value:4},
    {label:'5 Hours', value:5},
    {label:'6 Hours', value:6},
    {label:'7 Hours', value:7},
    {label:'8 Hours', value:8},
    
  ];
  const genders = [
    {label:'Male', value:'male'},
    {label:'Female', value:'female'}
  ];

  function calculate(){
    if(weight===""){
      alert('Enter your Weight')
    }
    else if(weight !="" && weight!= 0){
      let litres=bottle*0.33;
      let grams =litres*8*4.5;
      let buring =weight/10;
      let leftGram = grams- buring*time;
      if(leftGram>0){
        if(gender==='male'){
          
            let result= leftGram/(weight*0.7);
            changeColor(result);
            setAlcoholLevel(result.toFixed(2));
          }
          
        
        else if (gender==='female'){
          
            let result= leftGram/(weight*0.6);
            changeColor(result);
            setAlcoholLevel(result.toFixed(2));
            
          
        }
      } else {
        setAlcoholLevel(0)
        changeColor(0); // To prevent previous color state when alcohol level get negative.
      }
    }
   
    
     
  }

  function changeColor(result){
    if(result>=0 && result<=0.25){
      setColor('green')
    }
    else if(result>0.25 && result<=0.6){
      setColor('gold');
    }
    else if(result>0.6) {
      setColor('red');
    }
    else{
      setColor('black')
    }
  }
 

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.header}>Alcometer</Text>
      
      <Text style={styles.boldText}>Weight</Text>
      <TextInput value={weight}
       style={styles.input}
       onChangeText={(text)=> setWeight(text)}
       placeholder='Enter Weight' 
       keyboardType='number-pad'/>
      
       
      <Text style={styles.boldText}>Bootles</Text>
      <Picker
        selectedValue={bottle}
        onValueChange={(itemvalue)=> setbottle(itemvalue)}
        >
        {allBottle.map((bottle)=>(
          <Picker.Item key={bottle.value} label={bottle.label} value={bottle.value}  ></Picker.Item>
        )          
        )}
      </Picker>
      <Text style={styles.boldText}>Time</Text>
      <Picker
        selectedValue={time}
        onValueChange={(itemvalue)=> SetTime(itemvalue)}
        >
        {selectTime.map((time)=>(
          <Picker.Item key={time.value} label={time.label} value={time.value}  ></Picker.Item>
        )          
        )}
      </Picker>
      <Text style={styles.boldText}>Gender</Text>
      <Radiobutton
      options={genders}
      onPress={(value)=> setGender(value) }
      style={{color:'blue'}}/>
      <Text style={[styles.result,{color:color}]}>{alcoholLevel}</Text>
      <Button onPress={calculate} title='calculate'/>
    </ScrollView>
  );
}

