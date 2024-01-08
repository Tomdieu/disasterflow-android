import React, { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import * as Font from 'expo-font';
import { ThemeProvider, DefaultTheme } from '@react-navigation/native';
import ReactQueryProvider from "@/provider/ReactQueryProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const loadFont = async () => {
    return await Font.loadAsync({
      'poppins-regular': require('@/assets/fonts/poppins/Poppins-Regular.ttf'),
      'poppins-bold': require('@/assets/fonts/poppins/Poppins-Bold.ttf'),
      'poppins-medium': require('@/assets/fonts/poppins/Poppins-Medium.ttf'),
      'poppins-light': require('@/assets/fonts/poppins/Poppins-Light.ttf'),
      'poppins-semibold': require('@/assets/fonts/poppins/Poppins-SemiBold.ttf'),
      'poppins-thin': require('@/assets/fonts/poppins/Poppins-Thin.ttf'),
      'poppins-extralight': require('@/assets/fonts/poppins/Poppins-ExtraLight.ttf'),
      'poppins-extrabold': require('@/assets/fonts/poppins/Poppins-ExtraBold.ttf'),
      'poppins-black': require('@/assets/fonts/poppins/Poppins-Black.ttf'),
    })
  }

  useEffect(() => { 
    
    (async()=>{
      await loadFont()
      SplashScreen.hideAsync();
    })()
   }, [])


  return (<ReactQueryProvider>
    <ThemeProvider value={DefaultTheme}>
      <Slot />
    </ThemeProvider>
  </ReactQueryProvider>)
}
