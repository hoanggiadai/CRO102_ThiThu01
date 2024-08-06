import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchXeMays } from '../redux/actions/xeMayAction';

const XeMayScreen = () => {

    // Lấy danh sách dữ liệu từ store
    const listXeMay = useSelector(state => state.listXeMayStore.listXeMay);

    // Lấy đối tượng để điều khiển các action
    const dispatch = useDispatch();

    // Khi vào ứng dụng sẽ gọi action fetchXeMays để kéo dữ liệu từ API về store
    useEffect(() => {
      dispatch(fetchXeMays());
    }, [dispatch])
    

  return (
    <View>
      {
        listXeMay.map(row => (
            <View key={row.id}
                style={{margin:10,padding:10, borderColor:'blue', borderWidth:1}}>
                <Text>{row.ten_xe_ph36944}</Text>
            </View>
        ))
      }
    </View>
  )
}

export default XeMayScreen

const styles = StyleSheet.create({})