
import { Text, SafeAreaView, View  } from 'react-native';
import HomeStack from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import Footer from './routes/footer';


export default function App() {
  return (
    <NavigationContainer>
      <Footer />
    </NavigationContainer>
    
  );
}
