import { createBottomTabNavigator } from '@react-navigation/bottom-tabs/';
import User from '../pages/user';
import HomeStack from './homeStack';
import ProfileStack from './profileStack';

const Tab = createBottomTabNavigator();

export default function Footer(){
    return (
        <Tab.Navigator 
            id='footer'
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="HomePage" component={ HomeStack } />
            <Tab.Screen name="Profile" component={ ProfileStack }/>
        </Tab.Navigator>
    );
}