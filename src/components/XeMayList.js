import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { fetchXeMays } from '../redux/actions/xeMayAction';
import XeMayItem from './XeMayItem';
import Banner from './Banner';

const XeMayList = ({navigation}) => {
    const dispatch = useDispatch();
    const listXeMay = useSelector(state => state.listXeMayStore.listXeMay);

    useEffect(() => {
        dispatch(fetchXeMays());
    }, [dispatch]);

    return (
        <View style={styles.container}>
            <Banner/>
            <FlatList
                data={listXeMay}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <XeMayItem xeMay={item} />}
            />
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('AddXeMay')}>
                <Text style={styles.textButton}>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    button: {
        width: 70,
        height: 70,
        backgroundColor: 'green',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: 20,
        margin: 30
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default XeMayList;