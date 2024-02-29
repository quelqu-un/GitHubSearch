import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../MyGitHubApp/src/SearchScreen'; // Adjust the import path as necessary
import UserDetailScreen from '../MyGitHubApp/src/UserDetailScreen'; // Adjust the import path as necessary
//import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    //<SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} 
        options={{ 
          title: 'Search GitHub Users' ,
          headerStyle: {
            backgroundColor: '#7F27FF', // Set your desired color
          },
          headerTintColor: '#fff', // Set the color of the title text and back button
          headerTitleStyle: {
            fontWeight: 'bold', // Optional: if you want to style the title
          },
          }} />
          <Stack.Screen name="UserDetail" component={UserDetailScreen} options={{ 
            title: 'User Details', 
            headerStyle: {
              backgroundColor: '#7F27FF', // Set your desired color
            },
            headerTintColor: '#fff', // Set the color of the title text and back button
            headerTitleStyle: {
              fontWeight: 'bold', // Optional: if you want to style the title
            },
            }} />
        {/* You can add more screens here */}

      </Stack.Navigator>
    </NavigationContainer>
   // </SafeAreaView>
  );
}

export default App;
