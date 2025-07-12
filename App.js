import React,{ useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'
import * as Font from "expo-font";
import Navbar from "./src/assets/components/Navbar/Navbar";

const App = () => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        if(!fontLoaded) {
            Font.loadAsync({
                'ennis': require('./src/assets/fonts/Ennis.ttf')
            });

            setFontLoaded(true);
        }
    });

    return (
        fontLoaded ?
            <View style={styles.container}>
                <Navbar />
            </View>
            :
            <View style={styles.containerCarga}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Cargando fuentes...</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },

    containerCarga: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default App;