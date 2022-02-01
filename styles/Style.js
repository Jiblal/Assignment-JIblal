import { StyleSheet } from "react-native";
export default StyleSheet.create({
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
      textAlign: 'center',
    },
    boldText:{
      fontWeight: 'bold'
    },
    result:{
        fontSize:25,
        fontWeight:'bold',
        textAlign: 'center'
    },
    input:{
        paddingLeft:10
    },
    
    
    // Sytle for radio Buttons
    
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        width:'100%',
        
        marginBottom: 10,
        paddingLeft:10,
        paddingRight: 10,
       
       
    },
    label:{
        marginRight:10,
    },
    circle:{
        height:28,
        width:28,
        borderRadius:15,
        borderWidth:2,
        borderColor:'#000',
        alignItems:'center',
        justifyContent:'center'
    },
    checkedCircle:{
        width:15,
        height:15,
        borderRadius:7,
        backgroundColor:'#000',
    }
  });