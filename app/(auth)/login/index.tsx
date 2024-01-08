import { SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import LoginForm from '../../../components/auth/LoginForm'
import { StatusBar } from 'react-native'

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop:StatusBar.currentHeight}} className='bg-slate-50'>
      <StatusBar barStyle='dark-content'/>
      <LoginForm/>
      {/* <Text className='text-center py-5'>Power by ivantom</Text> */}
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})