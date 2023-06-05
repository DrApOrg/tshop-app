import { 
  Text, 
  StyleSheet, 
  View,
  Platform
} from "react-native"

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    marginTop: Platform.OS === 'ios' ? 70 : 60,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
})

export default AccountScreen
