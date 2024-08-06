import React from 'react';
import { View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteXeMay, fetchXeMays } from '../redux/actions/xeMayAction';
import { useNavigation } from '@react-navigation/native';

const XeMayItem = ({ xeMay}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleDelete = () => {
        Alert.alert(
            "Xác nhận xóa",
            "Bạn có chắc chắn muốn xóa xe này không?",
            [
                {
                    text: "Hủy",
                    style: "cancel"
                },
                {
                    text: "Đồng ý",
                    onPress: () => {
                        dispatch(deleteXeMay(xeMay.id))
                            .then(() => {
                                dispatch(fetchXeMays()); // Reload lại dữ liệu sau khi xóa
                            });
                    }
                }
            ],
            { cancelable: false }
        );
    };

    const handleEdit = () => {
        navigation.navigate('EditXeMay', { xeMay });
    };

    return (
        <View style={styles.item}>
            <Image source={{ uri: xeMay.hinh_anh_ph36944 }} style={styles.hinh_anh} />
            <Text style={styles.ten_xe}>{xeMay.ten_xe_ph36944}</Text>
            <Text style={styles.mau_xe}>{xeMay.mau_sac_ph36944}</Text>
            <Text style={styles.gia_ban}>{xeMay.gia_ban_ph36944} VNĐ</Text>
            <Text style={styles.mo_ta}>{xeMay.mo_ta_ph36944}</Text>
            <TouchableOpacity style={styles.button} onPress={handleEdit}>
                <Text style={styles.textButton}>Sửa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDelete}>
                <Text style={styles.textButton}>Xóa</Text>
            </TouchableOpacity>
            {/* Button for Edit */}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 8,
        backgroundColor: '#f8f9fa',
        borderColor: '#ced4da',
        borderWidth: 1,
    },
    hinh_anh: {
        width: '100%',
        height: 250,
        borderRadius: 15,
        marginBottom: 15,
        resizeMode: 'cover'
    },
    ten_xe: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10
    },
    mau_xe: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginBottom: 7
    },
    gia_ban: {
        fontSize: 16,
        fontWeight: '800',
        color: 'red',
        marginBottom: 7
    },
    mo_ta: {
        fontSize: 16,
        color: 'black',
        marginBottom: 20
    },
    button: {
        width: '100%',
        height: 60,
        borderRadius: 20,
        backgroundColor: 'blue',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 18,
        fontWeight: '800',
        color: 'white'
    }
});

export default XeMayItem;