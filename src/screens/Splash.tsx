import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../themes/Colors";
import FastImage from 'react-native-fast-image'
import images from "../assets/images";
import { scale, vScale } from "../themes/Scale";

const Splash = () => {
    return (
        <View style={styles.container} >
            <FastImage
                style={styles.logo}
                resizeMode='contain'
                source={images.logo}
            />
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: { width: scale(120), height: vScale(120) }
});
