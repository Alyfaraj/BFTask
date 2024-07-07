import { StyleSheet, View } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import { AppText, Spacer } from "../shared";
import { sWidth, scale, vScale } from "../../themes/Scale";
import Colors from "../../themes/Colors";
import FastImage from "react-native-fast-image";
import { STATIC_AVATAR } from "../../services/constants";

type CommentsListProps = {
    comments: Comment[]
}

const CommentsList = ({ comments }: CommentsListProps) => {


    const getItemHeight = (index: number) => {
        const availableHeights = [
            vScale(175),
            vScale(150),
            vScale(150),
            vScale(175),

        ];
        return availableHeights[index % 4];
    };



    const getBackgroundColor = (index: number) => {
        const availableHeights = [
            Colors.blue,
            Colors.orange,
            Colors.orange,
            Colors.blue,

        ];
        return availableHeights[index % 4];
    };

    const Item = ({ item, index }: { item: Comment, index: number }) => (
        <View
            style={[
                styles.itemContainer,
                {
                    minHeight: getItemHeight(index),
                    backgroundColor: getBackgroundColor(index),

                }]}
        >
            <AppText font="bold" color={Colors.white} numberOfLines={4} >{item.body}</AppText>
            <Spacer size="m" />
            <View style={styles.row} >
                <FastImage source={{ uri: STATIC_AVATAR }} style={styles.avatar} />
                <AppText size={12} color={Colors.white} >{item.name}</AppText>
            </View>
        </View>
    )



    return (
        <View style={{ flex: 1, marginHorizontal: scale(20), width: sWidth * .93, }}>
            <MasonryFlashList
                showsVerticalScrollIndicator={false}
                data={comments}
                numColumns={2}
                ItemSeparatorComponent={() => <Spacer size='s' />}
                estimatedItemSize={10}
                renderItem={Item}
            />
        </View >
    );
};

export default CommentsList;

const styles = StyleSheet.create({
    row: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        start: scale(15),
    },
    avatar: {
        width: scale(20),
        height: scale(20),
        borderRadius: scale(10),
        marginEnd: scale(5)
    },
    itemContainer: {
        width: sWidth * .45,
        borderRadius: 10,
        paddingHorizontal: scale(15),
        paddingVertical: 10,
        justifyContent: 'center'
    }
});
