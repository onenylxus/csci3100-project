// Import
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
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
  const navigation = useNavigation();
  const { getUser } = React.useContext(AuthContext);
  const { logout } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');

  const status = React.useRef(0);

  getUser(setUsername);

  async function deleteAccount() {
    await fetch('https://cu-there-server.herokuapp.com/deleteAccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
      }),
    })
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => {
        console.log(res);
        if (status.current === 200) {
          logout();
          return Alert.alert(
            'Account deleted',
            'Your account has been deleted',
            [
              {
                text: 'OK',
                onPress: () => undefined,
                style: 'cancel',
              },
            ]
          );
        }
        if (status.current === 422) {
          logout();
          return Alert.alert(
            'Account not found',
            'Your account has been deleted',
            [
              {
                text: 'OK',
                onPress: () => undefined,
                style: 'cancel',
              },
            ]
          );
        }
      })
      .catch((err) => console.log(err));
  }

  function askDelete() {
    return Alert.alert(
      'Delete this account?',
      'Are you sure you would like to delete this account? This action is irreversible.',
      [
        {
          text: 'No',
          onPress: () => undefined,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => deleteAccount(),
          style: 'destructive',
        },
      ]
    );
  }

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
        <TouchableOpacity onPress={() => askDelete()}>
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
