import React, { createContext, useContext, useEffect, useState } from "react";
import {
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "./../firebase.config";

//firebase firestore

import { doc, onSnapshot } from "firebase/firestore";

// toastify
import { toast } from "react-toastify";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const [userDetails, setUserDetails] = useState();

  console.log(userDetails);

  function logOut() {
    window.location.reload(false);
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  const getData = async (uid) => {
    try {
      onSnapshot(doc(db, "users", uid), (doc) => {
        setUserDetails({ ...doc.data(), uid: uid });
      });
      console.log({ ...doc.data(), uid: uid });
    } catch (error) {
      // toast.error("Could not fetch data");
      console.log(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      if (currentuser !== null) {
        currentuser.getIdTokenResult().then((idTokenResult) => {
          setUser(currentuser);
        });

        getData(currentuser.uid); // fetch enrolled  courses  list

        console.log("getData(currentuser.uid) ");
        // fetch enrolled  courses  list
      }
    });

    if (user) {
      return () => {
        unsubscribe();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logOut,
        googleSignIn,

        userDetails,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
