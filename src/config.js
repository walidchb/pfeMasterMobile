// firebase.js
import { initializeApp } from '@react-native-firebase/app'
import { getAuth } from '@react-native-firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyALWQfHmjyVkdIPtNluVegmNx45t_tV2Y8',
  authDomain: 'pfemaster-ad550.firebaseapp.com',
  projectId: 'pfemaster-ad550',
  storageBucket: 'pfemaster-ad550.appspot.com',
  messagingSenderId: '628982579083',
  appId: '1:628982579083:android:f4b0d0886852752f70798e',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
