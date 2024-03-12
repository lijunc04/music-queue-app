import { Text, TextInput, View } from "react-native";
import globalStyles from "../../styles/globalStyles";
import { useState } from "react/cjs/react.development";
import TestLobbyDB from "../../test-data/testLobbyData";


export default function JoinCodePage(props){
    const [boxValue, setBoxValue] = useState('');

    function codeProcess(code){
        if(code in TestLobbyDB){
            props.navigation.replace('LobbyUser', [TestLobbyDB[code],'code']);
        }else{
            alert("Code Doesn't Exist")
        }
    }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Join Code:</Text>
            <TextInput 
                defaultValue={boxValue} 
                style={globalStyles.textInput}
                onChangeText={(input)=>{
                    const filteredInput = input.replace(/[^0-9]/g, '');
                    setBoxValue(filteredInput);
                    if(filteredInput.length >= 4){
                        codeProcess(input);
                        setBoxValue('');
                    }
                }}
                keyboardType='numeric'
                autoFocus={true}
                placeholder="Enter the 4 digit code!"
            />
        </View>
    )
}


