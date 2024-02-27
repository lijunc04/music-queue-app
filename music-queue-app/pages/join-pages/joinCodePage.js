import { Pressable, Text, TextInput, View } from "react-native";
import globalStyles from "../../styles/globalStyles";
import { useState } from "react/cjs/react.development";

export default function JoinCodePage(props){
    const [boxValue, setBoxValue] = useState('');
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Enter Join Code</Text>
            <TextInput 
                value={boxValue} 
                style={globalStyles.textInput}
                onChangeText={(input)=>{
                    const filteredInput = input.replace(/[^0-9]/g, '');
                    setBoxValue(filteredInput);
                }}
                keyboardType='numeric'
            />
            <Pressable 
                style={globalStyles.submitBtn}
                onPress={()=>submitHandler(props)} 
            >
                <Text>Submit</Text>
            </Pressable>
        </View>
    )
    function submitHandler(props){
        const condition = true;
        const code = boxValue;
        if(condition){
            props.navigation.navigate('AddQueueMain', code)
        }
    
    }
}


