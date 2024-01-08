import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Link, useRouter } from "expo-router";

import { Button, HStack } from "@react-native-material/core"

import { FontAwesome } from "@expo/vector-icons"

import { SplashScreen } from 'expo-router';

type Props = {}


SplashScreen.preventAutoHideAsync()

const Root = (props: Props) => {

  const router = useRouter()

  const [isReady, setReady] = React.useState(false);
  React.useEffect(() => {
    // Perform some sort of async data or asset fetching.
    setTimeout(() => {
      // When all loading is setup, unmount the splash screen component.
      SplashScreen.hideAsync();
      setReady(true);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container} className='p-1'>
      <View className='flex-1 flex items-center justify-center'>
        <Image source={require('@/assets/images/disaster2.jpeg')} style={styles.logo} />
        <Text style={styles.title}>Disaster Management App</Text>
        <Text style={styles.subtitle}>Be prepared for anything, anytime.</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{router.push('/login')}}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>

  )
}

export default Root

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // padding: 20,
    backgroundColor: '#fff', // Set your desired background color
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    // resizeMode: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Set your desired overlay color and opacity
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius:5
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000', //'#007BFF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})