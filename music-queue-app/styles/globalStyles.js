import { StyleSheet, useColorScheme } from "react-native";

const globalStyles = StyleSheet.create({
        container: {
            flex: 1,
            //backgroundColor: [theme === 'dark' ? '#000000' : '#ffffff'],
            backgroundColor:'#ffffff',
            alignItems: 'center',
            justifyContent: 'center'
        },
        normalText: {
            fontFamily: 'Arial',
            fontSize: 14,
            //color: [theme==='dark'? 'white' : 'black'],
            color: '#000000',
        },
        titleText: {
            fontFamily: 'Arial',
            fontSize: 18,
            //color: [theme==='dark'? 'white' : 'black'],
            color: '#000000',
        },

        submitBtn:{
            margin: 5,
            padding: 5,
            borderWidth: 1,
            backgroundColor: '#a7cbf2',
            borderRadius: 5,
            borderColor: '#ffffff',
            width:'40%',
            height:'5%',
            alignItems: 'center',
        },

        textInput: {
            borderWidth: 1,
            margin: 10,
            padding: 10,
            height:'5%',
            width:'70%',
            borderRadius:5,
            textAlign:'center',
        },
        });

export default globalStyles;