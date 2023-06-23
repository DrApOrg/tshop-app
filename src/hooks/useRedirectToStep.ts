import { useDispatch } from "react-redux"
import { AppDispatch, useAppDispatch, useAppSelector } from "../redux/store"
import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { RoutePattern } from "../constants/routes"

export const useRedirecToSteps = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation()
  const { step } = useAppSelector(state => state.registerState);

  useEffect(() => {
    switch (step) {
      case 1:
        navigation.navigate(RoutePattern.StepOne as never)
        break;
      case 2:
        navigation.navigate(RoutePattern.StepTwo as never)
        break;
      case 3:
        navigation.navigate(RoutePattern.StepThree as never)
        break;
      case 4:
        navigation.navigate(RoutePattern.StepFour as never)
        break;
      default:
        navigation.navigate(RoutePattern.SignUp as never)
        break;
    }
  },[step])
}