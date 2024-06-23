import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
// import { Google } from '@expo/vector-icons'
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme } from '../../../styles'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Picker } from '@react-native-picker/picker'
import { Formik } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  // const [showPassword, setShowPassword] = useState(false)
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword)
  const genders = ['Male', 'Female'] // React Native Picker doesn't support complex objects
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2).max(50).required('Required'),
    lastName: Yup.string().min(2).max(50).required('Required'),
    gender: Yup.string().required('Required'),
    phoneNumber: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  })

  const handleSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2))
    actions.resetForm()
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <Image
          source={require(' ../../../../assetes/registerIllus.png')}
          style={{ width: 200, height: 150, marginBottom: 20 }}
        />
        <Text style={{ color: 'black', marginBottom: 20, fontSize: 20 }}>
          Sign Up for an Individual
        </Text>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            gender: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {formikProps => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '92%',
              }}
            >
              <View
                style={{
                  width: '100%',
                  marginBottom: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              >
                <View
                  style={{
                    width: '48%',
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
                    placeholder="First Name"
                    onChangeText={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                    value={formikProps.values.email}
                    keyboardType="email-address"
                  />
                </View>

                <View
                  style={{
                    width: '48%',
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
                    placeholder="Last Name"
                    onChangeText={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                    value={formikProps.values.email}
                    keyboardType="email-address"
                  />
                </View>
              </View>

              <View style={{ width: '100%', marginBottom: 20 }}>
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
                  <MaterialIcons name="alternate-email" size={24} color="black" />
                  <TextInput
                    placeholderTextColor={'gray'}
                    style={{ color: 'black', flex: 1, paddingHorizontal: 10 }}
                    placeholder="Enter your email"
                    onChangeText={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                    value={formikProps.values.email}
                    keyboardType="email-address"
                  />
                </View>
              </View>

              <View style={{ width: '100%', marginBottom: 20 }}>
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
                  <MaterialIcons name="phone" size={24} color="black" />
                  <TextInput
                    placeholderTextColor={'gray'}
                    style={{ color: 'black', flex: 1, paddingHorizontal: 10 }}
                    placeholder="Phone Number"
                    onChangeText={formikProps.handleChange('phoneNumber')}
                    onBlur={formikProps.handleBlur('phoneNumber')}
                    value={formikProps.values.phoneNumber}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              {/* <TextInput
                                  placeholderTextColor={'gray'}

                style={{ borderColor: 'black', borderWidth: 1 }}
                placeholder="Phone Number"
                onChangeText={formikProps.handleChange('phoneNumber')}
                onBlur={formikProps.handleBlur('phoneNumber')}
                value={formikProps.values.phoneNumber}
              /> */}

              {/* <Picker
                selectedValue={formikProps.values.gender}
                onValueChange={(itemValue, itemIndex) =>
                  formikProps.setFieldValue('gender', itemValue)
                }
              >
                <Picker.Item label="Select Gender" value="" />
                {genders.map((gender, index) => (
                  <Picker.Item key={index} label={gender} value={gender} />
                ))}
              </Picker> */}

              <View style={{ width: '100%', marginBottom: 20 }}>
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
                    placeholderTextColor={'gray'}
                    style={{ color: 'black', flex: 1, paddingHorizontal: 10 }}
                    placeholder="Enter your password"
                    onChangeText={formikProps.handleChange('password')}
                    onBlur={formikProps.handleBlur('password')}
                    value={formikProps.values.password}
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

              <View style={{ width: '100%', marginBottom: 20 }}>
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
                    placeholderTextColor={'gray'}
                    style={{ color: 'black', flex: 1, paddingHorizontal: 10 }}
                    placeholder="confirm your password"
                    onChangeText={formikProps.handleChange('confirmPassword')}
                    onBlur={formikProps.handleBlur('confirmPassword')}
                    value={formikProps.values.confirmPassword}
                    secureTextEntry={!showConfirmPassword}
                  />
                  <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
                    {showPassword ? (
                      <Ionicons name="eye-off-outline" size={24} color="black" />
                    ) : (
                      <Ionicons name="eye-outline" size={24} color="black" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                onPress={formikProps.handleSubmit}
                style={{
                  width: '100%',
                  marginTop: 20,
                  marginBottom: 20,
                  borderRadius: 20,
                  backgroundColor: theme.colors.primary,
                  paddingVertical: 10,
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <Text style={{ color: 'black' }}>or continue with:</Text>
        <TouchableOpacity
          style={{
            width: '90%',
            marginVertical: 20,
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
        </TouchableOpacity>

        <Text style={{ marginTop: 20, color: 'gray' }}>
          Have an Account? <Text style={{ color: 'blue' }}> Login Here</Text>
        </Text>

        <View style={{ borderTopWidth: 2, borderTopColor: 'blue', marginTop: 20, width: '80%' }} />

        <Text
          style={{
            textAlign: 'center',
            color: 'gray',
            marginBottom: 30,
            marginTop: 10,
            paddingHorizontal: 20,
          }}
        >
          This page is protected by the Google{' '}
          <Text style={{ color: 'blue' }}> Privacy Policy</Text> and{' '}
          <Text style={{ color: 'blue' }}> Terms of Service</Text> apply.
        </Text>
      </View>
    </ScrollView>
  )
}

export default Register
