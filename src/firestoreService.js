import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Add a user to Firestore
export const addUserToFirestore = async (userId, email) => {
  try {
    await addDoc(collection(db, "users"), {
      id: userId,
      email: email,
      createdAt: new Date(),
    });
    console.log("User added to Firestore");
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

// Get all users
export const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
