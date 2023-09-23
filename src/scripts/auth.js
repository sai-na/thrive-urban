// auth.js
import { auth } from '../firebase.config'; // Import Firebase authentication module

// Function to sign up a user with email and password
export const signUpWithEmailAndPassword = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    // You can perform additional actions here after successful signup
  } catch (error) {
    // Handle error (e.g., display error message)
    console.error('Error signing up:', error);
    throw error;
  }
};

// Function to sign in a user with email and password
export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    // You can perform additional actions here after successful sign-in
  } catch (error) {
    // Handle error (e.g., display error message)
    console.error('Error signing in:', error);
    throw error;
  }
};


// Add other authentication-related functions as needed
