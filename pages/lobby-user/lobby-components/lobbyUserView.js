import { Text, Pressable, View, StyleSheet } from "react-native";
import { useState } from "react/cjs/react.development";

export default function LobbyUserView(props){
    const containerStyles = props.style;
    const [lobbyData, setLobbyData] = useState(props.lobbyData)

    return(
        <View style={[containerStyles.userContainer, containerStyles.partitions]}>
            <Pressable
                style={
                    {
                        width: '40%',
                        height:'30%',
                        borderWidth:1,
                        justifyContent:'center', 
                        alignItems: 'center'
                    }

                }
                onPress={()=>{
                    props.navigation.navigate('AddQueueMain', [lobbyData,]);
                }}
            >
                <Text>Add Your Songs Now!</Text>
            </Pressable>
        </View>
    )
}