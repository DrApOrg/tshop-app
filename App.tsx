import { AppContainer } from './src/navigation';
import {Provider} from 'react-redux';
import {store , persistore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistore}>
        <AppContainer/>
      </PersistGate>
    </Provider>
  );
}