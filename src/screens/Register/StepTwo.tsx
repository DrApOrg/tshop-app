import { 
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native"
import { useRef, useState } from "react"
import { Button, PinInput } from "../../components"
import useRegisterViewModel from "../../viewmodels/useRegisterViewModel"
import { useCountdown } from "../../hooks/useCountdown"
import { useAppSelector } from "../../redux/store"

const StepTwo = () => {
  const {onVerifiedPinCode} = useRegisterViewModel()
  const {num} = useCountdown(15)

  const { pinCode } = useAppSelector(state => state.registerState);
  const [pin, setPin] = useState<string[]>(Array(5).fill(""))
  const verifyPin = pin.every(e => e.trim() !== "")

  // TODO: atomizar el componente countdown
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Bienvenido!</Text> 
        <Text style={styles.title}>ingresa el código de sms</Text>
      </View>
      <PinInput
        value={pin}
        onChange={setPin}
        length={5}
      />
      {(verifyPin && pinCode === pin.join("")) && 
        <Button 
          disabled={false}
          title="verified"
          onPress={() => onVerifiedPinCode()}
        />
      }
      <Button 
        ghost
        title={`nuevo codigo ${num > 0 ? num : ''}`}
        disabled={num > 0}
      />
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
    fontSize: 27,
    letterSpacing: 1,
    fontWeight: 'bold'
  }
})

export default StepTwo