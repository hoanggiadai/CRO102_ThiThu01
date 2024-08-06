import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store/store'
import XeMayScreen from './src/screens/XeMayScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import XeMayList from './src/components/XeMayList'
import AddXeMay from './src/components/AddXeMay'
import EditXeMay from './src/components/EditXeMay'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="XeMayList" screenOptions={{headerShown: false}}>
          <Stack.Screen name="XeMayList" component={XeMayList} />
          <Stack.Screen name="AddXeMay" component={AddXeMay} />
          <Stack.Screen name="EditXeMay" component={EditXeMay} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App