import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/homepage/home';
import ScanCodePage from '../pages/join-pages/scanCodePage';
import JoinCodePage from '../pages/join-pages/joinCodePage';
import AddQueueMain from '../pages/add-queue/addQueueMain';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
      <Stack.Navigator >
        <Stack.Screen 
          name="Home" 
          component={Home}
        />
        <Stack.Screen 
          name="ScanCode" 
          component={ScanCodePage}
          options={{
          }}
        />
        <Stack.Screen 
          name="JoinCode" 
          component={JoinCodePage}
        />
        <Stack.Screen
          name="AddQueueMain"
          component={AddQueueMain}
        />
      </Stack.Navigator>
    );
  }