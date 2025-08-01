import { Tabs } from 'expo-router';
import React from 'react';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },
      }}>
      <Tabs.Screen
        name="LoginScreen"

        options={{
          title: 'LoginScreen',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
