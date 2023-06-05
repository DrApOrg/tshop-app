import { FunctionComponent } from "react"
import { 
  StyleSheet, 
  Text,
  Image,
  Touchable,
  TouchableOpacity
} from "react-native"
import { Category } from "../../types/Category"


interface Props extends Category {
  onPress: () => void
}

const CategorieItem: FunctionComponent<Props> = ({name, description, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.itemCard} onPress={onPress}>
      <Text style={styles.itemTitle}>{name}</Text>
      <Image style={styles.itemImg} source={require('../../assets/testctg.png')}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemCard: {
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#F5F5F5',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12
  },
  itemTitle: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: 0.4
  },
  itemImg: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  }
})

export default  CategorieItem