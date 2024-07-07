import { RefreshControl, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useCallback, useState } from "react";
import { PostItem } from "../components/home";
import { ErrorContent, Spacer } from "../components/shared";
import Colors from "../themes/Colors";
import { PostsListShimmer } from "../components/shimmer";
import { useGetPosts } from "../hooks/posts";
import { isEmpty } from "lodash";
import { FlashList } from "@shopify/flash-list";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackPramsList } from "../navigation/types";


type ScreenNavigationProp = StackNavigationProp<MainStackPramsList, 'Home'>;

interface HomeProps {
    navigation: ScreenNavigationProp
}


const Home = ({ navigation }: HomeProps) => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, refetch, error, isError } = useGetPosts();
    const [isRefreshing, setIsRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        if (!isRefreshing) {
            setIsRefreshing(true);
            refetch()
                .finally(() => setIsRefreshing(false))

        }
    }, [isRefreshing, refetch]);

    const handleEndReached = useCallback(() => {
        if (hasNextPage) {
            fetchNextPage();
        }
    }, [hasNextPage, fetchNextPage]);



    return (
        <View style={styles.container}>
            <SafeAreaView />
            {isError && <ErrorContent error={error.message} refetch={refetch} />}

            {(isFetching && !isFetchingNextPage && isEmpty(data)) ?
                <PostsListShimmer />
                :
                <FlashList
                    data={data}
                    renderItem={({ item, index }) => <PostItem {...{ item, index }} />}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.5}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => <Spacer size="m" />}
                    ListFooterComponent={() => (
                        <>
                            {isFetchingNextPage && <PostsListShimmer fromLoadMore />}
                        </>
                    )}
                    estimatedItemSize={200}
                    refreshControl={
                        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
                    }
                />
            }
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    }
});