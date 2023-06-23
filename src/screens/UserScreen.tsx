import { useAppSelector } from "../redux/store"
import AccountScreen from "./Account/AccountScreen"
import WelcomeScreen from "./Register/WelcomeScreen"

const UserScreen = () => {
  const { user } = useAppSelector(state => state.userState)

  if(user.id && user.email && user.password) {
    return <AccountScreen/>
  }else {
    return <WelcomeScreen/>
  }

}

export default UserScreen