// test/firebase.test.js

import { initializeApp, getFirestore, initializeAuth } from 'firebase/app'
import { db, auth } from '../path/to/your/firebase/config'
import AsyncStorage from '@react-native-async-storage/async-storage'

jest.mock('firebase/app')  // Mocka todos os métodos do Firebase

describe('Firebase Initialization', () => {
  it('should initialize the app with correct config', () => {
    expect(initializeApp).toHaveBeenCalledWith({
      apiKey: "AIzaSyDa5DldqRm-uFlZmTEaFI0ojYEHt_BaLdg",
      authDomain: "projscs-2024.firebaseapp.com",
      projectId: "projscs-2024",
      storageBucket: "projscs-2024.firebasestorage.app",
      messagingSenderId: "209077765839",
      appId: "1:209077765839:web:b82e719a6f2f42d12199ba"
    })
  })

  it('should initialize firestore correctly', () => {
    expect(getFirestore).toHaveBeenCalledWith(initializeApp())
  })

  it('should initialize auth with persistence', () => {
    expect(initializeAuth).toHaveBeenCalledWith(initializeApp(), {
      persistence: expect.any(Function),
    })
  })
})

describe('AsyncStorage behavior', () => {
  it('should call AsyncStorage when initializing auth persistence', () => {
    expect(AsyncStorage.getItem).not.toHaveBeenCalled()
    expect(AsyncStorage.setItem).not.toHaveBeenCalled()
  })
})
