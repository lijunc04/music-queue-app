import { Pressable, Text, TextInput, View, StyleSheet, FlatList } from "react-native";
import globalStyles from "../../../styles/globalStyles";
import { useState, useEffect } from "react/cjs/react.development";
import TestSongDB from "../../../test-data/testSongData";
import SongPanelDeezer from "../../../components/songPanelDeezer";


export default function SongSearchView(props){
    const [boxValue, setBoxValue] = useState("");
    const [submittable, setSubmittable] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.DEEZER_API_KEY,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        if(boxValue != ''){
            const delayDebounceFn = setTimeout(() => {
                fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${boxValue}`, options)
                    .then(res=>res.json())
                    .then(result =>
                        setSearchResults(result.data)
                    );
              }, 300)
              return () => clearTimeout(delayDebounceFn);
        }
    },[boxValue]);

    return (
        <View style={globalStyles.container} >
            <TextInput 
                defaultValue={boxValue} 
                style={globalStyles.textInput}
                onChangeText={(input)=>{
                    setBoxValue(input)
                }}
            />
            {submittable
            ?
                <Pressable>
                    <Text>Submit</Text>
                </Pressable>
            :
                <></>
            }
            <FlatList 
                style={globalStyles.flatList}
                data={searchResults}
                renderItem={({item})=>
                    <SongPanelDeezer song={item} />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({

})