import { 
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions
} from "react-native"
import Constants from "expo-constants"
import {
  Input,
  Button,
  Toast
} from "../../components"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { useEffect, useState } from "react"
import { Toast as ToastType } from "../../types/Toast"
import { useDispatch } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import useRegisterViewModel from "../../viewmodels/useRegisterViewModel"


const StepFour = () => {
  const { onSubmitCredentials, error } = useRegisterViewModel()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const dispatch = useDispatch()


  const handleSubmitCredentials = () => {
    onSubmitCredentials({
      email,
      password
    })
  }

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Credenciales</Text>
        <View style={styles.form}>
          <Input value={email} onChange={setEmail} label="Email *" />
          <Input value={password} isPassword onChange={setPassword} label="Contraseña *" />
          <Button 
            title="Crear Cuenta"
            onPress={handleSubmitCredentials}
          />
        </View>
        {
          error.state && 
          <Toast
            title={"Error"}
            body={error.body}
          />
        }
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: Platform.OS === 'ios' ? 70 : 50,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  form: {
    gap: 25
  },
  title: { 
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 60,
  },
})

export default StepFour