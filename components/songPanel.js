import { Text, View, StyleSheet } from "react-native";
import TestSongDB from "../test-data/testSongData";
import TestUserDB from "../test-data/testUserData";

export default function SongPanel(props){
    const songData = TestSongDB[props.item.id];
    const userSelected = TestUserDB[props.item.userId];

    return(
        <View style={panelStyles.mainContainer}>
            <Text>{songData.name}</Text>
            <Text>{songData.artist}</Text>
            <Text>{userSelected.name}</Text>
        </View>
    )
}

const panelStyles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
    },
    
});