import { 
  Text,
  View,
  StyleSheet,
  Platform
} from "react-native"
import { useCallback, useEffect, useState } from "react"
import { 
  Button,
  InputPhone,
  Toast
} from "../../components"
import useRegisterViewModel from "../../viewmodels/useRegisterViewModel"
import { useDispatch } from "react-redux"
import { Toast as ToastType } from "../../types/Toast"
import { useAppDispatch, useAppSelector } from "../../redux/store"
import { registerSlice } from "../../redux/register"

const StepOne = () => {
  const {error, onSubmitPhone} = useRegisterViewModel()
  const dispatch = useAppDispatch();
  const { phoneNumber } = useAppSelector(state => state.registerState);

  const onInputChange = (value: string) => {
    dispatch(registerSlice.actions.setPhoneNumber(value))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>enter your phone number</Text>
      <InputPhone 
        value={phoneNumber} 
        onChange={onInputChange}
      />
      {
        error.state && 
        <Toast
          title={'Error'}
          body={error.body}
        />
      }
     <Button title='Continue' onPress={onSubmitPhone}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30,
    gap: 32,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  title:{
    marginBottom: 10,
    fontSize: 30,
    letterSpacing: 1,
    fontWeight: 'bold'
  }
})

export default StepOne