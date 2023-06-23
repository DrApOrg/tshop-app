import { 
  Text, 
  StyleSheet, 
  View,
  Platform,
  Image,
  TouchableOpacity
} from "react-native"
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useAccountViewModel } from "../../viewmodels/useAccountViewModel";
import { formatPhone } from "../../utils/format";

const NavItems: [string, string, string][] = [
  ["Mis Ordenes", "shopping-bag", "Orders"],
  ["Detalles", "user", "Details"],
  ["Direcciones", "map-pin", "Address"],
  ["Metodos de pago", "credit-card", "PaymentMethods"],
  ["Cerrar Sesion", "log-out", undefined],
]

const AccountScreen = () => {
  const { signOut, user } = useAccountViewModel()


  return (
    <View style={styles.container}>
      <Text style={styles.titleView}>mi cuenta</Text>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImg}source={require('../../assets/testctg.png')}/>
        <View>
          <Text style={styles.profileName}>{`${user.firstName} ${user.lastName}`}</Text>
          <Text style={styles.profilePhone}>+51 {formatPhone(user.phone.toString())}</Text>
          <Text style={styles.profilePhone}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.nav}>
        {NavItems.map(([item, icon, link], index)=> (
          <TouchableOpacity 
          style={styles.navItem} 
          key={index} 
          onPress={() => {
            if(link === undefined) {
              signOut()
            }else {
              useNavigation().navigate(link as never)
            }
          }}>
            <Feather name={icon as any} size={24} color={'black'} />
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 30,
    marginTop: Platform.OS === 'ios' ? 70 : 50,
    paddingTop: 20,
    paddingLeft: 10,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  profileImg: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  profileContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center'
  },
  profileName: {
    fontSize: 15,
    fontWeight: '600'
  },
  profilePhone:{
    color: '#909090'
  },
  nav: {
  },
  navItem: {
    display: 'flex',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  navText: {
    fontSize: 18
  },
  titleView: {
    fontSize: 37,
    fontWeight: 'bold'
  }
})

export default AccountScreen
