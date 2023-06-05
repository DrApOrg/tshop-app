import { FunctionComponent } from "react"
import { 
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native"
import { Color } from "../../utils/Colors"

const Button: FunctionComponent<Props> = ({title}) => {
  return (
    <TouchableOpacity style={styles.button_box}>
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button_box: {
    backgroundColor: Color.primary,
    width: '100%',
    height: 64,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_text: {
    fontWeight: '500',
    fontSize: 15,
  }
})

interface Props {
  title: string
}

export default Button
