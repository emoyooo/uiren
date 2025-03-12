import { auth } from "../firebase"; // Ensure this path is correct
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

/**
 * Registers a new user with email and password
 * @param {string} email - The user's email
 * @param {string} password - The user's password
 * @returns {Promise<Object>} - Returns user data if successful
 */
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered successfully:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error.code, error.message);
    throw error;
  }
};

/**
 * Logs in an existing user
 * @param {string} email - The user's email
 * @param {string} password - The user's password
 * @returns {Promise<Object>} - Returns user data if successful
 */
export const loginUser = async (email, password) => {
  try {
    console.log("Attempting to sign in with:", email);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Sign-in successful:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      throw new Error("User not found. Please check your credentials.");
    }
    console.error("Error signing in:", error.code, error.message);
    throw error;
  }
};

/**
 * Logs out the current user
 * @returns {Promise<void>}
 */
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully.");
  } catch (error) {
    console.error("Error signing out:", error.code, error.message);
  }
};
