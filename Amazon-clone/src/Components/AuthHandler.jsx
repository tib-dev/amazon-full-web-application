import { useEffect, useContext } from "react";
import { auth } from "../Utility/firebase";
import { Type } from "../Utility/action.type";
import { DataContext } from "../Components/DataProvider/DataProvider";

const AuthHandler = () => {
  // Correctly destructure state and dispatch from useContext
  const [state, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          payload: authUser, // Ensure payload matches your reducer structure
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          payload: null, // Ensure payload matches your reducer structure
        });
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [dispatch]);

  return null; // This component doesn't need to render anything
};

export default AuthHandler;
