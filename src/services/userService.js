import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

/**
 * Fetch user profile data from Firestore
 * @param {string} uid - The user's UID
 * @returns {Promise<Object>} - Returns user profile data if successful
 */
export const fetchUserProfile = async (uid) => {
  try {
    console.log("Fetching user profile for UID:", uid); // Debug log
    const userDocRef = doc(db, "users", uid);
    console.log("User document reference:", userDocRef.path); // Debug log
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      console.log("User profile found:", userDoc.data()); // Debug log
      return userDoc.data();
    } else {
      console.error("User profile not found for UID:", uid); // Debug log
      throw new Error("User profile not found");
    }
  } catch (error) {
    console.error("Error fetching user profile:", error.code, error.message);
    throw error;
  }
};
