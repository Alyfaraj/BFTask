import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { scale, sWidth, vScale } from '../../themes/Scale';
import { range } from 'lodash';
import Colors from '../../themes/Colors';
import { Spacer } from '../shared';

type PostsListShimmerProps = {
    fromLoadMore?: boolean
}

const PostsListShimmer = ({ fromLoadMore }: PostsListShimmerProps) => {
    const keyExtractor = (index: number) => {
        return `${index}`;
    };


    const Item = () => (
        <SkeletonPlaceholder backgroundColor={Colors.shimmer} >
            <>
                <SkeletonPlaceholder.Item
                    height={vScale(150)}
                    width={sWidth * .9}
                    borderRadius={8}
                    alignSelf='center'
                />

            </>
        </SkeletonPlaceholder>
    );



    return (
        <View>
            <FlatList
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                data={range(fromLoadMore ? 1 : 5)}
                renderItem={Item}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={() => <Spacer size='m' />}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default PostsListShimmer;

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: scale(15),
        alignSelf: 'center',
        marginTop: vScale(14)
    },
    separator: {
        height: vScale(20)
    }
});
