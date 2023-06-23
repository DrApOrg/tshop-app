import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { 
  MyOrderScreen,
  MyDetailScreen,
  PaymentMethodsScreen,
  AddressBook,
  LoginScreen,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  AccountScreen,
  WelcomeScreen,
  UserScreen
} from "../screens";

type RootStackParamList = {
  UserScreen: undefined;
  Orders: undefined;
  Details: undefined;
  Address: undefined;
  PaymentMethods: undefined;
  Login: undefined;
  StepOne: undefined;
  StepTwo: undefined;
  StepThree: undefined;
  StepFour: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const AccountStack = () => {
  return (
    <Stack.Navigator
    >

      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Orders"
        component={ MyOrderScreen }
        options={{
          title: 'My Orders'
        }}
      />
      <Stack.Screen
        name="Details"
        component={ MyDetailScreen }
        options={{
          title: 'My Details'
        }}
      />
      <Stack.Screen
        name="Address"
        component={ AddressBook }
        options={{
          title: 'Address Book'
        }}
      />
      <Stack.Screen
        name="PaymentMethods"
        component={ PaymentMethodsScreen }
        options={{
          title: 'Payment Methods'
        }}
      />
      {/* // login */}
      <Stack.Screen
        name="Login"
        component= { LoginScreen }
        options={{
          title: 'Iniciar Sesion'
        }}
      />

      {/* // register */}
      <Stack.Screen
        name="StepOne"
        component={ StepOne }
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="StepTwo"
        component={ StepTwo }
        options={{
          title: ''
        }}
      />
      <Stack.Screen
        name="StepThree"
        component={ StepThree }
        options={{
          title: '',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="StepFour"
        component={ StepFour }
        options={{
          title: 'Credentials',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default AccountStack