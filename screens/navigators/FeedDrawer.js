// import
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChatroomScreen from '../ChatroomScreen';
import ProfileScreen from '../ProfileScreen';
import FeedStack from './FeedStack';

// Drawer
const Drawer = createDrawerNavigator();

// Export feed drawer
export default function FeedDrawer() {
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  function CustomDrawerContent() {
    return (
      <DrawerContentScrollView>
        <DrawerItem
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <DrawerItem
          label="Chatroom"
          onPress={() => navigation.navigate('Chatroom')}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent />}
      initialRouteName="Feed"
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
    >
      <Drawer.Screen name="Feed" component={FeedStack} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Chatroom" component={ChatroomScreen} />
    </Drawer.Navigator>
  );
}
