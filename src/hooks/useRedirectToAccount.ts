import { useAppDispatch, useAppSelector } from "../redux/store";
import { useNavigation } from "@react-navigation/native"
import { authSlice } from "../redux/auth";
import { RoutePattern } from "../constants/routes";
import { useEffect } from "react";

export const useRedirectToAccount = () => {
  const navigation = useNavigation()
  const user = useAppSelector(state => state.userState.user);

  useEffect(() => {
    if(user.id && user.email && user.password) {
      // redirect to load zite
      navigation.navigate(RoutePattern.Account as never)
    }
  }, [])
} 
