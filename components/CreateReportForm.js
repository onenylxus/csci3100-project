// Import
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import AuthContext from './AuthContext';
import Style from '../assets/style';

// Export create report form
export default function CreateReportForm({ post }) {
  const { getUser } = React.useContext(AuthContext);
  const navigation = useNavigation();

  const [username, setUsername] = React.useState('');
  const [content, setContent] = React.useState('');

  const status = React.useRef(0);

  // Get username
  getUser(setUsername);

  async function createReport() {
    await fetch('https://cu-there-server.herokuapp.com/createReport', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postId: post._id,
        username,
        content,
      }),
    })
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (status.current === 200) {
          return Alert.alert(
            'Report sent successfully',
            'We have already received your report. We will review your report soon. Thank you for maintaining a healthy environment in CU There.',
            [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Feed'),
                style: 'cancel',
              },
            ]
          );
        }
        if (status.current === 422) {
          switch (res.error) {
            case 'missingContentError':
              return Alert.alert(
                'Report content cannot be blank.',
                'Please type something in the report so we know what happened.',
                [
                  {
                    text: 'OK',
                    onPress: () => undefined,
                    style: 'cancel',
                  },
                ]
              );
            case 'repeatedReportError':
              return Alert.alert(
                'Your report is in progress',
                'We have already received your report, and we are working on it. Please do not send a report to the same post.',
                [
                  {
                    text: 'OK',
                    onPress: () => undefined,
                    style: 'cancel',
                  },
                ]
              );
            default:
              return new Error();
          }
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>
        Report an issue to us
      </Text>
      <TextInput
        multiline
        placeholder="Tell us what's wrong?"
        onChangeText={(text) => setContent(text)}
        style={Style.createPostBox}
      />
      <View style={{ maxWidth: '50%', alignSelf: 'center', marginTop: '2%' }}>
        <Button title="Submit" onPress={createReport} />
      </View>
    </View>
  );
}
