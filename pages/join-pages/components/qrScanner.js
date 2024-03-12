import { CameraView, useCameraPermissions, Camera} from 'expo-camera/next';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react/cjs/react.development';
import globalStyles from '../../../styles/globalStyles';


export default function QRCamera(props){
    const [facing , setFacing] = useState('back');
    const [scanned, setScanned] = useState(false);
    const [permission, requestPermission] = useState(null);
    const [navDestination, setNavDestination] = useState('AddQueueMain');

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        requestPermission(status === "granted");
        })();
    }, []);

    const scannedHandler = ({type, data}) =>{
        setScanned(true);
        props.navigation.replace(navDestination, [data, 'qr']);
    }

    const flipBtnHandler = () =>{
        setFacing(cur=>(cur==='back'?'front':'back'));
    }

    return(
        <View style={props.style}>
            {permission === true
                ?
                <View>
                    <CameraView
                        style={styles.camera}
                        facing={facing}
                        onBarcodeScanned={scanned ? undefined : scannedHandler}
                        barCodeScannerSettings={{
                            barCodeTypes: ['qr'],
                        }}
                    >
                    </CameraView> 
                    <Pressable
                        onPress={()=>{flipBtnHandler()}}
                        style={styles.flipBtn}
                    >
                        <Text>Flip</Text>
                    </Pressable>
                </View>    
                :
                <View>
                    <Text>Please enable camera permissions in settings.</Text>
                </View>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    camera:{
        flex:1,
        width: 200
    },
    flipBtn:{
        margin:5,
        padding: 5,
        borderWidth: 1,
        backgroundColor: '#a7cbf2',
        alignItems: 'center'
    }
})