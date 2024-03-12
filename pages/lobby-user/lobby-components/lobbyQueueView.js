import { Text, View, StyleSheet, FlatList } from "react-native";
import globalStyles from "../../../styles/globalStyles";
import { useState } from "react/cjs/react.development";
import SongPanel from "../../../components/songPanel";

export default function LobbyQueueView(props){
    const containerStyles = props.style;
    const [lobbyData, setLobbyData] = useState(props.lobbyData);
    return (
        <View style={[containerStyles.partitions, containerStyles.playlistContainer]}>
            <Text>Current queue:</Text>
            <FlatList 
                style={globalStyles.flatList}
                data={lobbyData.songList}
                renderItem={({item})=>
                    <SongPanel item={item} />
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}