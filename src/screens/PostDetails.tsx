import { ActivityIndicator, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { useGetPost } from "../hooks/posts";
import { PostItem } from "../components/home";
import Colors from "../themes/Colors";
import { AppText, Spacer } from "../components/shared";
import { scale } from "../themes/Scale";
import { CommentsList } from "../components/details";
import { useGetComments } from "../hooks/comments";
import Icon from 'react-native-vector-icons/Entypo'
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackPramsList } from "../navigation/types";
import { isEmpty } from "lodash";
import { RouteProp } from "@react-navigation/native";



type ScreenNavigationProp = StackNavigationProp<MainStackPramsList, 'PostDetails'>;

interface PostDetailsProps {
    navigation: ScreenNavigationProp
    route: RouteProp<MainStackPramsList, 'PostDetails'>;
}


const PostDetails = ({ navigation, route }: PostDetailsProps) => {
    const { id } = route.params
    const { data, isLoading } = useGetPost(id)
    const { data: comments, isLoading: loadingComments } = useGetComments(id)

    return (
        <View style={styles.container} >
            <SafeAreaView />
            <Pressable onPress={() => navigation.goBack()} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }} >
                <Icon name='chevron-thin-left' size={22} color={Colors.black} style={[styles.align, styles.arrow]} />
            </Pressable>

            {(isLoading || loadingComments) ? <ActivityIndicator size='large' /> :
                <>
                    <PostItem showFullBody item={data} />
                    <Spacer size='m' />
                    {!isEmpty(comments) &&
                        <AppText style={styles.align} font='bold' size={18} >Comments</AppText>
                    }
                    <Spacer size='m' />
                    <CommentsList {...{ comments }} />
                </>
            }

        </View>
    );
};

export default PostDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    align: {
        marginStart: scale(24)
    },
    arrow: {
        marginVertical: 22
    }
});
