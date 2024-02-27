import {createStackNavigator} from '@react-navigation/stack';

import User from '../pages/user';

const Stack = createStackNavigator();

export default function ProfileStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='user' component={User} />
        </Stack.Navigator>
    )
}