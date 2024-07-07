import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import Spacer from "./Spacer";
import { scale } from "../../themes/Scale";
import Colors from "../../themes/Colors";

interface Props {
    error: string
    refetch: () => void
}


const ErrorContent = ({ error, refetch }: Props) => {
    return (
        <View style={styles.container} >
            <AppText align='center' >Something went wrong :{error}</AppText>
            <Spacer size="m" />
            <Pressable onPress={refetch} >
                <AppText size={16} font="bold" color={Colors.mainColor} >Reload</AppText>
            </Pressable>
        </View>
    );
};

export default ErrorContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: scale(40)
    }
});