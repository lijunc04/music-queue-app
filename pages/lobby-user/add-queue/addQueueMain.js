import { Text, View, Pressable } from "react-native";
import globalStyles from "../../../styles/globalStyles";
import SongSearchView from "./songSearchPage";

export default function AddQueueMain(props){

    const lobbyData = props.route.params[0];

    return (
        <View style={globalStyles.container}>
            <SongSearchView />
        </View>
    )
}


//Top: search bar that leads to a different page for searching
//First panel: Songs the user added to the queue
//Second panel: Songs the user added before