import React, { useState } from 'react'
import {
  View,
  Linking,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../../styles'

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
      }}
    >
      <Image
        source={require(' ../../../../assetes/loginIllus.png')}
        style={{ width: 200, height: 150, marginBottom: 20 }}
      />
      <Text style={{ color: 'black', marginBottom: 20, fontSize: 20 }}>Log in to continue</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setLoading(true)
          setError('')

          // setTimeout(() => {
          auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(async () => {
              const axiosInstance = axios.create({
                baseURL: 'https://back-pfe-master.vercel.app',
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              try {
                console.log(1)
                const response = await axiosInstance.get('/user/me', {
                  params: {
                    email: values.email,
                  },
                })
                console.log(2)

                let user = response.data
                await AsyncStorage.setItem('userInfo', JSON.stringify(user)) // Store user data

                // await localStorage.setItem('userInfo', JSON.stringify(user))
                console.log('user has been stored successfuly')
                console.log(user)

                try {
                  console.log(3)

                  const response = await axiosInstance.get('/organization/organizations', {
                    params: {
                      _id: user?.organizations[0]?._id,
                    },
                  })
                  console.log(4)
                  let organization = response.data[0]
                  await AsyncStorage.setItem('organization', JSON.stringify(organization)) // Store organization data

                  // await localStorage.setItem('organization', JSON.stringify(response.data[0]))
                  console.log('organization has been stored successfuly')
                  console.log(organization)

                  await navigation.navigate('Home', { screen: 'Board' })
                  resetForm()
                  setLoading(false)
                } catch (error) {
                  console.error('Error:', error)
                }
              } catch (error) {
                console.error('Error:', error)
              }
            })
            .catch(error => {
              if (error.code === 'auth/user-not-found') {
                setError('User not found!')
                setLoading(false)

                // Alert.alert('Error', 'User not found!')
              } else if (error.code === 'auth/invalid-credential') {
                setError('invalid credential!')
                setLoading(false)

                // Alert.alert('Error', 'Wrong password!')
              } else {
                console.log(error)
                setError('unknown Error')
                setLoading(false)

                // Alert.alert('Error', error.message)
              }
            })

          // alert(JSON.stringify(values, null, 2))
          // }, 400)
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <View style={{ width: '100%', alignItems: 'center' }}>
            <View style={{ width: '90%', marginBottom: 20 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
              >
                <Ionicons name="person" size={24} color="black" />
                <TextInput
                  placeholderTextColor={'gray'}
                  style={{ color: 'black', flex: 1, paddingHorizontal: 10 }}
                  placeholder="Enter your email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
              </View>
            </View>
            <View style={{ width: '90%', marginBottom: 20 }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  borderColor: 'black',
                  borderWidth: 1,
                }}
              >
                <MaterialCommunityIcons name="lock" size={24} color="black" />
                <TextInput
                  style={{ color: 'black', flex: 1, paddingHorizontal: 10 }}
                  placeholder="Enter your password"
                  placeholderTextColor={'gray'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  {showPassword ? (
                    <Ionicons name="eye-off-outline" size={24} color="black" />
                  ) : (
                    <Ionicons name="eye-outline" size={24} color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: '90%',
                marginBottom: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: loading ? theme.colors.primaryLight : theme.colors.primary,
                paddingVertical: 10,
                alignItems: 'center',
              }}
              onPress={handleSubmit}
              disabled={loading}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                {loading ? 'Loading ' : 'Login'}
              </Text>
              {loading ? <ActivityIndicator /> : null}
            </TouchableOpacity>
            <Text style={{ color: 'red', textAlign: 'center' }}>{error ? error : null}</Text>
          </View>
        )}
      </Formik>
      <Text style={{ textAlign: 'center', color: 'black', marginBottom: 20, fontSize: 20 }}>
        if you dont have an account you can{' '}
        <TouchableOpacity
          onPress={() => {
            const url = 'https://www.youtube.com/watch?v=xdLiifeIML4&list=RDpbOVrFsrwsA&index=4'
            Linking.openURL(url).catch(err => console.error("Couldn't load page", err))
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: 'blue',
              textDecorationLine: 'underline',
            }}
          >
            Create an account
          </Text>
        </TouchableOpacity>{' '}
      </Text>
      {/* <TouchableOpacity
          style={{
            width: '90%',
            marginBottom: 20,
            borderRadius: 20,
            backgroundColor: '#4285F4',
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            // Handle Google sign-in
          }}
        >
          <MaterialCommunityIcons name="google" size={24} color="white" />
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>
            Sign up with Google
          </Text>
        </TouchableOpacity> */}

      <View
        style={{ borderTopWidth: 2, borderTopColor: '#4285F4', marginVertical: 20, width: '80%' }}
      />
      <Text style={{ fontSize: 16, color: '#666', textAlign: 'center' }}>
        This page is protected by the Google <Text style={{ color: 'blue' }}> Privacy Policy</Text>{' '}
        and <Text style={{ color: 'blue' }}> Terms of Service</Text> apply.
      </Text>
    </View>
  )
}

export default Login
