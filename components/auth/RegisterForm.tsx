import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity,StatusBar, ScrollView } from 'react-native'
import React from 'react'

import { useForm, Controller } from "react-hook-form";

import { signUpSchema, signUpSchemaType } from "@/schema/signUpSchema"
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { TextInput } from '@react-native-material/core';


const RegisterForm = () => {

  const router = useRouter()

  const { control, handleSubmit, formState: { errors, isDirty, isValid, isLoading } } = useForm<signUpSchemaType>({ mode: "onBlur", resolver: zodResolver(signUpSchema) })

  const onSubmit = (data: signUpSchemaType) => { }

  return (
    <View className="flex-1 justify-center p-2">
      <Text
        className="font-bold"
        style={{ textAlign: "center", marginVertical: 9, fontSize: 30 }}
      >
        Register To DisasterFlow
      </Text>
      <ScrollView>

      <View>
        <Text className='text-xl'>Username</Text>
        <Controller

          control={control}
          name="username"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              variant="outlined"
              placeholder="Enter your username here"
              inputMode="text"
              color="#000"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Field is required!",
            },
          }}
        />
        {errors.username && (
          <Text style={{ color: "red" }}>{errors.username.message}</Text>
        )}
      </View>
      <View>
        <Text className='text-xl'>Email</Text>
        <Controller

          control={control}
          name="email"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              variant="outlined"
              placeholder="Enter your email here"
              inputMode="email"
              color="#000"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Field is required!",
            },
          }}
        />
        {errors.email && (
          <Text style={{ color: "red" }}>{errors.email.message}</Text>
        )}
      </View>

      <View>
        <Text className='text-xl'>Phone number</Text>
        <Controller

          control={control}
          name="phone_number"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              variant="outlined"
              placeholder="Enter your phone number here"
              inputMode="tel"
              color="#000"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Field is required!",
            },
          }}
        />
        {errors.phone_number && (
          <Text style={{ color: "red" }}>{errors.phone_number.message}</Text>
        )}
      </View>

      <View>
        <Text className='text-xl'>Gender</Text>
        <Controller

          control={control}
          name="gender"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              variant="outlined"
              placeholder="Select yout gender"
              inputMode="text"
              color="#000"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Field is required!",
            },
          }}
        />
        {errors.gender && (
          <Text style={{ color: "red" }}>{errors.gender.message}</Text>
        )}
      </View>

      <View>
        <Text className='text-xl'>Password</Text>
        <Controller

          control={control}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              variant="outlined"
              placeholder="Enter your password here"
              inputMode="text"
              keyboardType='visible-password'
              color="#000"
              value={value}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
            />
          )}
          rules={{
            required: {
              value: true,
              message: "Field is required!",
            },
          }}
        />
        {errors.password && (
          <Text style={{ color: "red" }}>{errors.password.message}</Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>{router.push('/login')}}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      </ScrollView>

      

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    marginHorizontal: 5,
    marginVertical: 6,
  },
  form: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    display: "flex",
    gap: 10,
  },
  label: {
    fontWeight: "500",
    marginVertical: 4,
  },
  textInput: {
    paddingVertical: 3,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#ddd",
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
});


export default RegisterForm