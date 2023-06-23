import { 
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native"
import { Button, Input, Toast } from "../../components"
import { useEffect, useState } from "react"
import DatePicker from "react-native-date-picker"
import useRegisterViewModel from "../../viewmodels/useRegisterViewModel"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { User } from "../../types/User"
import { useAppDispatch } from "../../redux/store"
import { authSlice } from "../../redux/auth"

const StepThree = () => {
  const {onSubmitProfile, error} = useRegisterViewModel() 
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [dni, setDni] = useState<string>("")
  const [birthday, setBirthday] = useState<string>("")

  // birthday
  const [date, setDate] = useState<Date>(new Date())
  const [open, setOpen] = useState(false)

  const handleSubmitProfile = () => {
    onSubmitProfile({ 
      firstName,
      lastName,
      dni,
      birthday,
    })
  }

  return(
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Configura tu perfil</Text>
        <Input value={firstName} onChange={setFirstName} label="Nombre *" />
        <Input value={lastName} onChange={setLastName} label="Apellidos *" />
        <Input value={dni} onChange={setDni} label="Dni *" />
        <Input value={birthday} label="Fecha de nacimiento" />
        <Button 
          title="Siguiente"
          onPress={handleSubmitProfile}
        />
        {
          error.state && 
          <Toast
            title={'Error'}
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
    justifyContent: 'center',
    gap: 25,
    marginTop: Platform.OS === 'ios' ? 70 : 50,
    backgroundColor: '#fff',
  },
  title: { 
    textAlign: 'center',
    fontSize: 18
  },
})

export default StepThree