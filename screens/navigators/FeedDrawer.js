// import
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChannelsScreen from '../TagsScreen/ChannelScreen';
import FeedStack from './FeedStack';
import Header from '../../components/Header';

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
          label="Academics"
          onPress={() => navigation.navigate('Channels', { tags: 'Academics' })}
        />
        <DrawerItem
          label="Relationships"
          onPress={() =>
            navigation.navigate('Channels', { tags: 'Relationships' })
          }
        />
        <DrawerItem
          label="News"
          onPress={() => navigation.navigate('Channels', { tags: 'News' })}
        />
        <DrawerItem
          label="CU-related"
          onPress={
            (() => navigation.navigate('Channels'), { tags: 'CU-related' })
          }
        />
        <DrawerItem
          label="Entertainment"
          onPress={() =>
            navigation.navigate('Channels', { tags: 'Entertainment' })
          }
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
      <Drawer.Screen
        name="Channels"
        component={ChannelsScreen}
        options={{ ...Header, headerShown: true }}
      />
      <Drawer.Screen name="Feed" component={FeedStack} />
    </Drawer.Navigator>
  );
}
