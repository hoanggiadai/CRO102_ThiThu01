import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { createXeMay } from '../redux/actions/xeMayAction';

const AddXeMay = ({ navigation }) => {
    const dispatch = useDispatch();
    const [tenXe, setTenXe] = useState('');
    const [mauSac, setMauSac] = useState('');
    const [giaBan, setGiaBan] = useState('');
    const [moTa, setMoTa] = useState('');
    const [hinhAnh, setHinhAnh] = useState('');

    const handleAddXeMay = () => {
        const newXeMay = {
            ten_xe_ph36944: tenXe,
            mau_sac_ph36944: mauSac,
            gia_ban_ph36944: parseInt(giaBan),
            mo_ta_ph36944: moTa,
            hinh_anh_ph36944: hinhAnh,
        };
        dispatch(createXeMay(newXeMay));
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tên xe"
                value={tenXe}
                onChangeText={setTenXe}
            />
            <TextInput
                style={styles.input}
                placeholder="Màu sắc"
                value={mauSac}
                onChangeText={setMauSac}
            />
            <TextInput
                style={styles

                    .input}
                placeholder="Giá bán"
                value={giaBan}
                onChangeText={setGiaBan}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Mô tả"
                value={moTa}
                onChangeText={setMoTa}
            />
            <TextInput
                style={styles.input}
                placeholder="Hình ảnh"
                value={hinhAnh}
                onChangeText={setHinhAnh}
            />
            <Button title="Add Xe May" onPress={handleAddXeMay} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: '#ced4da',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
});

export default AddXeMay;