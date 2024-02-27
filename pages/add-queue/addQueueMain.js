import { Text, View } from "react-native";

export default function AddQueueMain(props){
    const code = props.route.params;
    const temporaryDB = {
        1111: {
            name: 'UserA',
            songList: [],
            settings: {
                maxSingleUserSelect: 1,
                bannedList: [],
                
            },
        }
    }

    return (
        <View>
            <Text>{code}</Text>
        </View>
    )
}