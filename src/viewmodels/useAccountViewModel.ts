import { authSlice } from "../redux/auth"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { useNavigation } from "@react-navigation/native"
import { RoutePattern } from "../constants/routes"
import { registerSlice } from "../redux/register"
import { resetState } from "../redux/auth"

export const useAccountViewModel = () => {
  const { user } = useAppSelector(state => state.userState);
  const dispatch = useAppDispatch()
  const navigation = useNavigation()

  const signOut =  () => {
    dispatch(authSlice.actions.resetState())
    dispatch(registerSlice.actions.reset())
    navigation.navigate(RoutePattern.SignUp as never)
  }

  return {
    signOut,
    user
  }
}