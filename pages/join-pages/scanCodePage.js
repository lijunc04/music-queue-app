import { StyleSheet, Text, View } from "react-native";

import globalStyles from "../../styles/globalStyles";
import QRCamera from "./components/qrScanner";

export default function ScanCodePage(props){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Scan the barcode</Text>
            <QRCamera style={styles.cameraComponent} navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    cameraComponent:{
        flex: 0.5,
        padding: 10,
        margin: 5,
        alignItems:'center',
    }
});