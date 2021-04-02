// Import
import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export Message Bar
export default function MessageBar() {
  const [message, setMessage] = React.useState('');

  return (
    <View style={Style.messageBar}>
      <FontAwesomeIcon
        icon={faPen}
        size={15}
        style={{ marginHorizontal: 5, marginVertical: 12 }}
      />
      <TextInput
        placeholder="Write Message"
        style={{ width: 530 }}
        value={message}
        onChangeText={(value) => setMessage(value)}
      />
      <TouchableOpacity style={Style.sendMessageButtom}>
        <Text style={{ color: 'blue' }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}
