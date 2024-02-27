import { View, Text, StyleSheet,} from "react-native";
import React, {useEffect} from 'react';
import HomeHostBtn from "./homeHostButton";
import HomeJoinCodeBtn from "./homeJoinCodeButton";
import HomeScanCodeBtn from "./homeScanCodeButton";
import globalStyles from "../../styles/globalStyles";

export default function Home(props){
    return (
        <View style={[globalStyles.container, containerStyles.container]}>
            <HomeJoinCodeBtn navigation={props.navigation} styles={btnStyles.btnBasics}/>
            <HomeScanCodeBtn navigation={props.navigation} styles={btnStyles.btnBasics}/>
            <HomeHostBtn navigation={props.navigation} styles={btnStyles.btnBasics}/>
        </View>
    );
}

const containerStyles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
});

const btnStyles = StyleSheet.create({
    btnBasics:{
        padding: 10,
        margin: 5,
        backgroundColor: '#DDDDDD',
        width: '20%',
        borderRadius: '10%'
    },
    btnOnPress:{
        opacity: '50%',
    }
})
