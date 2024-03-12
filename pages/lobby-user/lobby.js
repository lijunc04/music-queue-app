import { Text, View, StyleSheet } from "react-native";
import globalStyles from "../../styles/globalStyles";
import LobbyStatusView from "./lobby-components/lobbyStatusView";
import LobbyQueueView from "./lobby-components/lobbyQueueView";
import LobbyUserView from "./lobby-components/lobbyUserView";


export default function LobbyPageUserView(props){
    const lobbyData = props.route.params[0];

    return(
        <View style={globalStyles.container}>
            <LobbyStatusView lobbyData={lobbyData} style={containerStyles}/>
            <LobbyQueueView lobbyData={lobbyData} style={containerStyles}/>
            <LobbyUserView lobbyData={lobbyData} style={containerStyles} navigation={props.navigation} />
        </View>
    )
}

const containerStyles = StyleSheet.create({
    partitions:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    headContainer:{
        flex: 1,
        borderWidth: 1,
    },
    playlistContainer:{
        flex: 3,
        
    },
    userContainer:{
        flex: 2,
    },
    playlistFlatlist:{
        flex:1,
        backgroundColor: 'red',
    }
})