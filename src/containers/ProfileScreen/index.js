import React, { useState } from 'react'
import { View, Text, Button, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../../styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Yup from 'yup'

import styles from './styles'

import { Formik } from 'formik'

const ProfileScreen = ({ navigation }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)
  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2).max(50).required('Required'),
    lastName: Yup.string().min(2).max(50).required('Required'),
    gender: Yup.string().required('Required'),
    phoneNumber: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  })

  const handleSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2))
    actions.resetForm()
  }
  const handleEditClick = () => {
    setIsEditMode(true)
  }

  const signOut = () => {
    setIsSigningOut(true)
    auth()
      .signOut()
      .then(() => navigation.navigate('Auth'))
  } // Uncomment this line if using navigation

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: '#314155',
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}
      >
        <MaterialIcons name="settings" size={24} color="white" />
        <Text style={{ fontSize: 20, color: 'white', marginLeft: 10 }}>Settings</Text>
      </View>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              backgroundColor: '#314155',
              minWidth: 80,
              minHeight: 80,
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MaterialCommunityIcons name="account-circle" size={50} color="white" />
          </View>
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginBottom: 4 }}>
              Walid Chebbab
            </Text>
            <Text style={{ color: '#666', marginBottom: 2 }}>Développeur</Text>
            <Text style={{ color: '#666', marginBottom: 2 }}>ID: 00014A</Text>
            <Text style={{ color: '#666', fontWeight: 'bold' }}>34 ans</Text>
          </View>
          {!isEditMode && (
            <View style={{ position: 'relative' }}>
              <TouchableOpacity onPress={handleEditClick} style={{ padding: 10 }}>
                <MaterialCommunityIcons name="pencil" size={30} color="#314155" />
              </TouchableOpacity>
            </View>
          )}
        </View>
        {isEditMode ? (
          <View
            style={{
              marginTop: 50,
              justifyContent: 'center',
              borderColor: '#314155',
              borderWidth: 2,
              borderRadius: 20,
              padding: 20,
            }}
          >
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                gender: '',
                password: '',
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
                    width: '100%',
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

                  <View style={styles.EditBtns}>
                    <TouchableOpacity style={styles.saveBtn} onPress={formikProps.handleSubmit}>
                      <Text style={{ ...styles.authBtnLabel, color: 'white' }}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.CancelBtn} onPress={() => setIsEditMode(false)}>
                      <Text style={{ ...styles.authBtnLabel, color: '#314155' }}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
            {/* Repeat the same structure for other fields */}
          </View>
        ) : (
          <View
            style={{
              marginTop: 50,
              borderColor: '#314155',
              borderWidth: 2,
              borderRadius: 20,
              padding: 20,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="account" size={24} color="black" />
                <Text style={{ color: 'black', marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>
                  Nom :
                </Text>
              </View>
              <Text style={{ color: 'gray', marginLeft: 34 }}>Doe</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="account" size={24} color="black" />
                <Text style={{ color: 'black', marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>
                  Prénom :
                </Text>
              </View>
              <Text style={{ color: 'gray', marginLeft: 34 }}>John</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons name="alternate-email" size={24} color="black" />
                <Text style={{ color: 'black', marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>
                  Email :
                </Text>
              </View>
              <Text style={{ color: 'gray', marginLeft: 34 }}>Walidchebbab2001@gmail.com</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="phone" size={24} color="black" />
                <Text style={{ color: 'black', marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>
                  Téléphone :
                </Text>
              </View>
              <Text style={{ color: 'gray', marginLeft: 34 }}>06677839262</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="lock" size={24} color="black" />
                <Text style={{ color: 'black', marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>
                  Password :
                </Text>
                <Text style={{ color: 'gray', marginLeft: 34 }}>*********</Text>
              </View>
              <TouchableOpacity onPress={togglePasswordVisibility}>
                {showPassword ? (
                  <Ionicons name="eye-off-outline" size={24} color="black" />
                ) : (
                  <Ionicons name="eye-outline" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
            {/* Repeat the same structure for other fields */}
            {/* <View style={styles.EditBtns}>
              <TouchableOpacity style={styles.saveBtn}>
                <Text style={{ ...styles.authBtnLabel, color: 'white' }}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.CancelBtn}>
                <Text style={{ ...styles.authBtnLabel, color: '#314155' }}>Cancel</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        )}

        <TouchableOpacity
          style={{
            width: '100%',
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: isSigningOut ? theme.colors.primaryLight : theme.colors.primary,
            paddingVertical: 10,
            alignItems: 'center',
          }}
          onPress={signOut}
        >
          <Text style={{ color: 'white', marginRight: 4, fontWeight: 'bold', fontSize: 16 }}>
            {isSigningOut ? 'Loading ' : 'Sign Out'}
          </Text>
          {isSigningOut ? <ActivityIndicator /> : null}
        </TouchableOpacity>
        {/* <Button
          style={{ color: 'red', marginTop: 30, borderRadius: 20 }}
          title="Sign Out"
          onPress={signOut}
        /> */}
      </View>
    </View>
  )
}

export default ProfileScreen
