// Import
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faSignOutAlt,
  faInfoCircle,
  faUserSlash,
} from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../components/AuthContext';

// Export Settings screen

export default function SettingsScreen() {
  const { logout } = React.useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <View>
      {/* About us */}
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <FontAwesomeIcon
              icon={faInfoCircle}
              size={23}
              style={{ margin: 5, alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 32, padding: 20 }}>About us</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Delete account */}
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={undefined}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <FontAwesomeIcon
              icon={faUserSlash}
              size={23}
              style={{ margin: 5, alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 32, padding: 20 }}>Delete Account</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Logout */}
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={logout}>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size={23}
              style={{ margin: 5, alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 32, padding: 20 }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
