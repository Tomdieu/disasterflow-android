import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterForm from '@/components/auth/RegisterForm'
import Button from '@/components/Button'
import { HStack } from 'react-native-flex-layout'

type Props = {}

const Register = (props: Props) => {
  
  return (
    <SafeAreaView style={{ flex: 1, marginTop:StatusBar.currentHeight}} className='bg-slate-50'>
      <StatusBar barStyle='dark-content'/>
     <View className='flex-1 p-1'>
       {/* <RegisterForm/> */}
      {/* <Text className='text-center py-5'>Power by ivantom</Text> */}
      <Text>Register as a</Text>
      <View className='flex flex-row items-center justify-center'>
      <Button  title='Citizen' color={"#fff"} className='bg-black rounded-md flex-1 space-x-5'/>
      <Button  title='EmergencyResponder' color={"#fff"} className='bg-black rounded-md flex-1'/>
      </View>

     </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})