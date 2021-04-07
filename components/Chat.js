// Import
import React from 'react';
import { View, Text } from 'react-native';
import Style from '../assets/style';

// Export Chat
export default function Chat() {
  // message data
  const DATA = [
    {
      date: '31th March, 2021',
      messageContent: ['Nice to meet you!', 'Nice to meet you!'],
      sender: ['me', 'others'],
      timestamp: ['12:30', '12:32'],
    },
    {
      date: '1st April, 2021',
      messageContent: [
        'My name is Mandy',
        'I am studying Mathematics',
        'My name is Sophy',
        'I am studying Statistics',
      ],
      sender: ['me', 'me', 'others', 'others'],
      timestamp: ['14:01', '14:44', '14:44', '14:45'],
    },
    {
      date: 'Yesterday',
      messageContent: [
        'This is a long message XDDDDDDDDDDDDDDDDDDDDDDDDDDD',
        'HAHA',
      ],
      sender: ['me', 'others'],
      timestamp: ['12:30', '12:32'],
    },
    {
      date: 'Today',
      messageContent: ['Hi', 'hi'],
      sender: ['others', 'me'],
      timestamp: ['12:30', '12:32'],
    },
  ];

  const message = [];

  // Style by sender
  function messagePosition(index1, index2, props) {
    if (DATA[index1].sender[index2] === 'me') {
      if (props === 'messagePos') {
        return 'flex-end';
      }
      if (props === 'messageColor') {
        return '#0036D3';
      }
      if (props === 'textColor') {
        return '#FFFFFF';
      }
    }
    if (props === 'messagePos') {
      return 'flex-start';
    }
    if (props === 'messageColor') {
      return '#D2D2D2';
    }
    if (props === 'textColor') {
      return '#000000';
    }
  }

  // eslint-disable-next-line no-plusplus
  for (let index1 = 0; index1 < DATA.length; index1++) {
    // output date of message
    message.push(
      <View style={Style.chatDate}>
        <Text style={{ color: '#000', padding: 5 }}>{DATA[index1].date}</Text>
      </View>
    );

    for (
      let index2 = 0;
      index2 < DATA[index1].messageContent.length;
      // eslint-disable-next-line no-plusplus
      index2++
    ) {
      message.push(
        // output message text and timestamp
        <View>
          <View
            style={{
              alignSelf: messagePosition(index1, index2, 'messagePos'),
              padding: 8,
              backgroundColor: messagePosition(index1, index2, 'messageColor'),
              margin: 3,
              maxWidth: '80%',
              borderRadius: 15,
            }}
          >
            <Text
              style={{ color: messagePosition(index1, index2, 'textColor') }}
            >
              {DATA[index1].messageContent[index2]}
            </Text>
            <Text
              style={{
                color: messagePosition(index1, index2, 'textColor'),
                alignSelf: messagePosition(index1, index2, 'messagePos'),
                fontSize: 11,
              }}
            >
              {DATA[index1].timestamp[index2]}
            </Text>
          </View>
        </View>
      );
    }
  }

  return <View>{message}</View>;
}
