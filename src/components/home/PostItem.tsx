import { Pressable, StyleSheet, View } from "react-native";
import React, { FC } from "react";
import { AppText, Card } from "../shared";
import Colors from "../../themes/Colors";
import FastImage from "react-native-fast-image";
import { scale } from "../../themes/Scale";
import { STATIC_AVATAR } from "../../services/constants";
import { useNavigation } from "@react-navigation/native";

type PostItemProps = {
    index?: number
    item: Post
    showFullBody?: boolean
}

const PostItem: FC<PostItemProps> = ({ index = 0, item, showFullBody }) => {

    const navigation = useNavigation() as any


    const onItemPress = () => {
        navigation.navigate('PostDetails', { id: item.id })
    }

    return (
        <Pressable onPress={onItemPress} disabled={showFullBody} >
            <Card
                style={[styles.container,
                { borderLeftWidth: index % 2 == 0 ? 0 : 6, borderRightWidth: index % 2 == 0 ? 6 : 0 }]}
            >
                <AppText font="bold" size={18} >{item.title}</AppText>
                <AppText size={12} numberOfLines={showFullBody ? undefined : 3}>{item.body}</AppText>
                <View style={styles.row}>
                    <FastImage style={styles.avatar} source={{ uri: STATIC_AVATAR }} />
                    <AppText size={10} >user{item.user_id}</AppText>
                </View>
            </Card>
        </Pressable>

    );
};

export default PostItem;

const styles = StyleSheet.create({
    container: {
        borderLeftColor: Colors.mainColor,
        borderRightColor: Colors.yellow,
        marginVertical: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 10
    },
    avatar: {
        width: scale(25),
        height: scale(25),
        borderRadius: scale(13),
        marginEnd: scale(5)
    }
});
