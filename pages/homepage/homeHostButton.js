import { Pressable, Text } from "react-native";

export default function HomeHostBtn(props){
    return (
        <Pressable 
            style={props.styles} 
            onPress={()=>{}} 
            key ={'Host'}
        >
            <Text>Host Now</Text>
        </Pressable>
    )
}