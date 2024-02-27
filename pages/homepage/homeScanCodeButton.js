import { Pressable, Text } from "react-native";

export default function HomeScanCodeBtn(props){
    return (
        <Pressable
            style={props.styles}
            onPress={()=>{
                props.navigation.navigate('ScanCode');
            }}
            key='scancodebtn'
        >
            <Text>Join By QR Code</Text>
        </Pressable>
    )
}