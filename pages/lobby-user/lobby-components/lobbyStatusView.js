import { Text, Pressable, View, StyleSheet } from "react-native";

import { useState } from "react/cjs/react.development"; 

export default function LobbyStatusView(props){
    const containerStyles = props.style;
    const [lobbyData, setLobbyData] = useState(props.lobbyData);
    const [curStatus, setCurStatus] = useState(lobbyData.status);

    return (
        <View style={[containerStyles.partitions, containerStyles.headContainer]}>
           {curStatus == 0
            ?
                <Text>This event is not active at the momment</Text>
            :
                <Text>Current playing:{lobbyData.songList[0].id}</Text>
            }
        </View>
    )
}