// Import
import React from 'react';
import { View, Text } from 'react-native';

// Export Create Chat
export default function Chat() {
  const DATA = [
    {
      title: '31th March, 2021',
      data: ['Nice to meet you!', 'Nice to meet you!'],
      sender: ['me', 'others'],
    },
    {
      title: '1st April, 2021',
      data: [
        'My name is Mandy',
        'I am studying Mathematics',
        'My name is Sophy',
        'I am studying Statistics',
      ],
      sender: ['me', 'me', 'others', 'others'],
    },
    {
      title: 'Yesterday',
      data: ['This is a long message XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', 'HAHA'],
      sender: ['me', 'others'],
    },
    {
      title: 'Today',
      data: ['Hi', 'hi'],
      sender: ['others', 'me'],
    },
  ];

  const message = [];

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
    message.push(
      <View
        style={{
          alignSelf: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          backgroundColor: '#D2D2D2',
          borderRadius: 15,
          marginVertical: 5,
        }}
      >
        <Text style={{ color: '#000', padding: 5 }}>{DATA[index1].title}</Text>
      </View>
    );
    // eslint-disable-next-line no-plusplus
    for (let index2 = 0; index2 < DATA[index1].data.length; index2++) {
      message.push(
        <View>
          <View
            style={{
              alignSelf: messagePosition(index1, index2, 'messagePos'),
              padding: 10,
              backgroundColor: messagePosition(index1, index2, 'messageColor'),
              margin: 5,
              maxWidth: '80%',
              borderRadius: 15,
            }}
          >
            <Text
              style={{ color: messagePosition(index1, index2, 'textColor') }}
            >
              {DATA[index1].data[index2]}
            </Text>
          </View>
        </View>
      );
    }
  }

  return <View>{message}</View>;
}
