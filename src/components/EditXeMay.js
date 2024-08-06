import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchXeMays, updateXeMay } from '../redux/actions/xeMayAction';


const EditXeMay = ({ route, navigation }) => {
    const { xeMay } = route.params;
    const dispatch = useDispatch();
    const [tenXe, setTenXe] = useState(xeMay.ten_xe_ph36944);
    const [mauSac, setMauSac] = useState(xeMay.mau_sac_ph36944);
    const [giaBan, setGiaBan] = useState(xeMay.gia_ban_ph36944.toString());
    const [moTa, setMoTa] = useState(xeMay.mo_ta_ph36944);
    const [hinhAnh, setHinhAnh] = useState(xeMay.hinh_anh_ph36944);

    const handleEditXeMay = () => {
        const updatedXeMay = {
            ten_xe_ph36944: tenXe,
            mau_sac_ph36944: mauSac,
            gia_ban_ph36944: parseInt(giaBan),
            mo_ta_ph36944: moTa,
            hinh_anh_ph36944: hinhAnh,
        };
        dispatch(updateXeMay(xeMay.id, updatedXeMay)).then(() => {
            dispatch(fetchXeMays()); // Reload lại dữ liệu sau khi xóa
        });
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
                style={styles.input}
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
            <Button title="Edit Xe May" onPress={handleEditXeMay} />
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

export default EditXeMay;