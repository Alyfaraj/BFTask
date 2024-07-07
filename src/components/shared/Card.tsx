import { ViewStyle, StyleSheet, Text, View, StyleProp } from "react-native";
import React, { PropsWithChildren, FC } from "react";
import { sWidth, scale } from "../../themes/Scale";
import Colors from "../../themes/Colors";

type CardProps = {
    style?: StyleProp<ViewStyle>;

}

const Card: FC<PropsWithChildren<CardProps>> = ({ children, style }) => {
    return (
        <View style={[styles.container, style]} >
            {children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        width: sWidth * .9,
        paddingVertical: 8,
        paddingHorizontal: scale(20),
        borderRadius: 8,
        shadowOpacity: .1,
        shadowOffset: { width: 1, height: 1 },
        backgroundColor: Colors.white,
        elevation: 1,
        alignSelf: 'center'
    }
});