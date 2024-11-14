// __mocks__/firebase.js

import { jest } from '@jest/globals'

// Mock do Firestore
export const getFirestore = jest.fn(() => ({
  collection: jest.fn(),
  doc: jest.fn(),
  getDoc: jest.fn(),
  setDoc: jest.fn(),
  updateDoc: jest.fn(),
  deleteDoc: jest.fn(),
}))

// Mock do Auth
export const initializeAuth = jest.fn(() => ({
  currentUser: null,
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  onAuthStateChanged: jest.fn(),
}))

// Mock de AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}))

// Mock da função initializeApp
export const initializeApp = jest.fn(() => ({
  name: 'FirebaseApp',
  options: {
    apiKey: 'fake-api-key',
    projectId: 'fake-project-id',
  },
}))
