import { 
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity
} from "react-native"
import { FunctionComponent } from 'react'

const HistoryCard: FunctionComponent<Props> = () => {
  return (
    <TouchableOpacity style={styles.itemCard}>
      <Image style={styles.itemImage} source={require('../../assets/historyimg.jpeg')}/>
      <Text style={styles.itemName}>best of 2020</Text>
    </TouchableOpacity>
  )
}

interface Props {
}

const styles = StyleSheet.create({
  itemCard: {
    marginRight: 12,
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  itemImage: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
  },
  itemName: {
    width: '80%',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white'
  }
})

export default HistoryCard