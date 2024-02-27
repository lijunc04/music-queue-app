import { StyleSheet, Text, View } from "react-native";

export default function Head(props){
    return(
        <View style = {styles.container}>
            <Text>{props.page}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        borderStyle: 'solid',
    },
});