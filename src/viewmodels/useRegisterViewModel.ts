import { useNavigation } from "@react-navigation/native"
import { User } from "../types/User"
import { 
  useAppDispatch,
  useAppSelector
} from "../redux/store";
import {registerSlice} from '../redux/register'
import * as Auth from "../services/Auth";
import { useCallback, useState } from "react";
import { Error } from "../types/Error";
import { RoutePattern } from "../constants/routes";
import { authSlice } from "../redux/auth";

const useRegisterViewModel = () => {
  const dispatch = useAppDispatch() 
  const navigation = useNavigation()
  const [error, setError] = useState<Error>({body: '', state: false});
  const { phoneNumber } = useAppSelector(state => state.registerState);
  const { user } = useAppSelector(state => state.userState);

  const onSubmitPhone = useCallback(() => {
    if(phoneNumber) {
      Auth.sendSmsCode(phoneNumber)
      .then(response => {
        if(response.status !== 409) {
          navigation.navigate(RoutePattern.StepTwo as never)
          dispatch(registerSlice.actions.setStep(2))
          dispatch(registerSlice.actions.setPinCode(response.data.code))
        }else {
          throw response
        }
      })
      .catch(error => {
        setError({
          body: error.message,
          state: true
        })
      })
      .finally(() => {
        setTimeout(() => {
          setError({ body: '', state: false });
        }, 1000);
      });
    }
  }, [phoneNumber])

  const onVerifiedPinCode = () => {
    navigation.navigate(RoutePattern.StepThree as never)
    dispatch(registerSlice.actions.setStep(3))
  }

  const onSubmitProfile = useCallback((param: User) => {
    console.log(phoneNumber)
    Auth.preRegister({
      ...param,
      name: ' ',
      accountType: '02',
      phone: phoneNumber
    })
    .then(response => {
      if(response.status < 400) {
        console.log(response)
        dispatch(authSlice.actions.setUserState(response.data))
        navigation.navigate(RoutePattern.StepFour as never)
        dispatch(registerSlice.actions.setStep(4))
      }else {
        throw response
      }
    })
    .catch(error => {
      setError({
        body: error.message,
        state: true
      })
    })
    .finally(() => {
      setTimeout(() => {
        setError({ body: '', state: false });
      }, 1000);
    });
  }, [user, phoneNumber])

  const onSubmitCredentials = useCallback((param: User) => {
    console.log({
      id: user.id,
      password: param.password,
      email: param.email,
    })
    Auth.register({
      id: user.id,
      password: param.password,
      email: param.email,
    })
    .then(response => {
      if(response.status < 400) {
        console.log(user, response)
        dispatch(authSlice.actions.setUserState(response.data))
        navigation.navigate(RoutePattern.Account as never)
      }else {
        throw response
      }
    })
    .catch(error => {
      setError({
        body: error.message,
        state: true
      })
    })
    .finally(() => {
      setTimeout(() => {
        setError({ body: '', state: false });
      }, 1000);
    });

  },[user.email, user.password, user.id])


  return {
    onSubmitPhone,
    error,
    onVerifiedPinCode,
    onSubmitProfile,
    onSubmitCredentials
  }
}

export default useRegisterViewModel