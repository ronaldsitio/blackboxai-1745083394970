import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

import ToDoScreen from './screens/ToDoScreen';
import MoodTrackerScreen from './screens/MoodTrackerScreen';
import FinanceScreen from './screens/FinanceScreen';
import GamificationScreen from './screens/GamificationScreen';
import CommunityScreen from './screens/CommunityScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="ToDo">
          <Tab.Screen name="ToDo" component={ToDoScreen} />
          <Tab.Screen name="Mood" component={MoodTrackerScreen} />
          <Tab.Screen name="Finance" component={FinanceScreen} />
          <Tab.Screen name="Gamification" component={GamificationScreen} />
          <Tab.Screen name="Community" component={CommunityScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
