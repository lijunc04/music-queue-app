import { Text, View, StyleSheet, Image } from "react-native";
import globalStyles from "../styles/globalStyles";
import { useEffect, useState } from "react";

export default function SongPanelDeezer({song}){
    const artistData = song.artist;
    const albumData = song.album;
    const [albumImage, setAlbumImage] = useState('');
    const [artistImage, setArtistImage] = useState('');

    useEffect(()=>{
        fetch(albumData.cover, {
            redirect: 'manual',
        }).then(response => {
            setAlbumImage(response)
        });
        fetch(artistData.picture, {
            redirect: 'manual',
        }).then(response => {
            setArtistImage(response)
        });
    },[])

    function durationToString(duration){
        var h = Math.floor(duration/3600);
        var m = Math.floor(duration%3600/60);
        m = m < 10? `0${m}` : m;
        var s = Math.floor(duration%3600%60);
        s = s < 10? `0${s}` : s;
        if(duration > 3600){
            return(`${h}:${m}:${s}`);
        }else{
            return(`${m}:${s}`);
        }
    }


    return (
        <View style={styles.container}>
            <Image
                style={styles.albumCover}
                source={albumImage}
                contentFit="fill"
            />

            <View style={styles.infoContainer}>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.duration}>{durationToString(song.duration)}</Text>
            </View>

            <View style={styles.artsitContainer}>
            <Image
                style={styles.artistCover}
                source={artistImage}
                contentFit="fill"
            />
                <Text>{artistData.name}</Text>
            </View>
    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderWidth: 0.5,
        width:'100%',
        flex: 1,
        minWidth:'100%',
        alignContent:'center',
        justifyContent:'center',
    },
    albumCover: {
        width: '100%',
        height: '100%',
        flex:1,
    },
    infoContainer:{
        flexDirection:'row',
        flex: 3,
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
    },
    songTitle:{
        flex: 2,
        textAlign: 'center',
    },
    duration:{
        flex: 1,
        textAlign: 'center',
    },
    artsitContainer:{
        flex: 2,
        flexDirection: 'row'
    },
    artistCover:{
        flex:1,
        borderRadius: 100,
    },
    addButton:{
        flex: 1
    }
})