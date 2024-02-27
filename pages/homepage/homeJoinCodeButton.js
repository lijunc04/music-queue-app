import { Pressable, Text } from "react-native";



export default function HomeJoinCodeBtn(props){
    return (
        <Pressable 
            style={props.styles} 
            onPress={()=>{
                props.navigation.navigate('JoinCode');
            }} 
            key={'joincode'}
        >
            <Text>Join By Code</Text>
        </Pressable>
    )
}